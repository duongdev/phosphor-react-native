#!/usr/bin/env node
/**
 * scripts/bundle-bench.mjs
 *
 * Real-world Metro bundle-size benchmark using an actual Expo project.
 * Installs phosphor-react-native from a packed tarball (same format as npm
 * registry), swaps the import strategy in App.tsx, runs `expo export`, and
 * reports the real Metro bundle sizes.
 *
 * Usage:
 *   node scripts/bundle-bench.mjs                 # full run (setup + benchmark)
 *   node scripts/bundle-bench.mjs --setup         # force-recreate the bench app
 *   node scripts/bundle-bench.mjs --setup-only    # create app, install, stop
 *   node scripts/bundle-bench.mjs --no-pack       # skip npm pack + install (reuse existing tarball)
 *   node scripts/bundle-bench.mjs --no-minify     # disable Metro minification
 *   node scripts/bundle-bench.mjs --weight bold   # test a different weight subpath
 *   node scripts/bundle-bench.mjs --verbose       # show Metro / expo output
 *
 * The bench Expo app lives in bundle-bench/ (gitignored).
 * It is created once and reused — the tarball is always re-packed so you
 * measure the current state of the source tree.
 *
 * Pre-requisites:
 *   node generator/generate-svg.mjs   (generate icon source)
 *   yarn build                        (or react-native-builder-bob build)
 *   node scripts/build-weights.mjs    (build per-weight subpaths)
 */

import { execSync } from 'child_process';
import { gzipSync } from 'zlib';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const benchDir = path.join(root, 'bundle-bench');
const distDir = path.join(benchDir, '.bench-dist');

// ── CLI ───────────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2);
const VERBOSE = argv.includes('--verbose');
const FORCE_SETUP = argv.includes('--setup');
const SETUP_ONLY = argv.includes('--setup-only');
const NO_PACK = argv.includes('--no-pack');
const NO_MINIFY = argv.includes('--no-minify');
const TREE_SHAKE = argv.includes('--tree-shake');
const wi = argv.indexOf('--weight');
const TARGET_WEIGHT = wi !== -1 ? argv[wi + 1] : 'regular';

// ── helpers ───────────────────────────────────────────────────────────────────

/** Environment that suppresses interactive prompts in sub-processes. */
const subEnv = { ...process.env, CI: '1', EXPO_NO_TELEMETRY: '1' };

function run(cmd, cwd = root, quiet = !VERBOSE) {
  return execSync(cmd, {
    cwd,
    stdio: quiet ? 'pipe' : 'inherit',
    encoding: 'utf8',
    env: subEnv,
  });
}

function header(title) {
  console.log(`\n  ┌─ ${title}`);
}

function step(msg) {
  process.stdout.write(`  │  ${msg} ... `);
}

function ok(detail = '') {
  console.log(`✓${detail ? `  (${detail})` : ''}`);
}

function die(msg) {
  console.log('');
  console.error(`\n  ✗ ${msg}\n`);
  process.exit(1);
}

// ── Phase 1: pack ─────────────────────────────────────────────────────────────

header('Pack');

let tarball, tarballPath;

if (NO_PACK) {
  tarball = fs
    .readdirSync(root)
    .find((f) => /^phosphor-react-native[^/]*\.tgz$/.test(f));
  if (!tarball)
    die('--no-pack: no existing tarball found. Run without --no-pack first.');
  tarballPath = path.join(root, tarball);
  console.log(`  │  skipping pack (--no-pack)`);
  console.log(`  └─ reusing ${tarball}`);
} else {
  // Remove stale tarballs from previous runs
  fs.readdirSync(root)
    .filter((f) => /^phosphor-react-native[^/]*\.tgz$/.test(f))
    .forEach((f) => fs.removeSync(path.join(root, f)));

  step('npm pack');
  try {
    // --ignore-scripts: skip the prepare/build lifecycle so we pack the
    // already-built lib/ without re-running bob build (which is slow and
    // requires dev tooling not present in CI).  The library must be built
    // before running this script.
    run('npm pack --ignore-scripts --quiet');
  } catch (e) {
    die(`npm pack failed: ${e.stderr || e.message}`);
  }
  ok();

  tarball = fs
    .readdirSync(root)
    .find((f) => /^phosphor-react-native[^/]*\.tgz$/.test(f));
  if (!tarball) die('Tarball not found after npm pack');
  tarballPath = path.join(root, tarball);
  console.log(`  └─ ${tarball}`);
}

// ── Phase 2: setup bench app ──────────────────────────────────────────────────

const needsCreate =
  FORCE_SETUP || !fs.existsSync(path.join(benchDir, 'package.json'));

header('Setup');

if (needsCreate) {
  fs.removeSync(benchDir);

  step('create-expo-app  (takes ~1–2 min on first run)');
  try {
    // blank-typescript → simple App.tsx, no expo-router
    run(
      'npx create-expo-app@latest bundle-bench --template blank-typescript',
      root,
      false // always show output so user isn't stuck watching silence
    );
    ok();
  } catch (e) {
    die(`create-expo-app failed: ${e.stderr || e.message}`);
  }

  // Confirm we got a plain App.tsx (not router-based app/ dir)
  if (!fs.existsSync(path.join(benchDir, 'App.tsx'))) {
    die(
      'Expected App.tsx at bundle-bench/App.tsx but it was not created.\n' +
        '    The template may have changed. Check bundle-bench/ and update the script.'
    );
  }

  // Install react-native-svg using expo's version resolver so it picks
  // the version compatible with the installed Expo SDK.
  step('expo install react-native-svg');
  try {
    run('npx expo install react-native-svg', benchDir, !VERBOSE);
    ok();
  } catch (e) {
    die(`expo install react-native-svg failed: ${e.stderr || e.message}`);
  }
}

// Always (re-)write metro.config.js so changes to the resolver polyfill
// take effect even when running with --no-pack against an existing bench dir.
// Patch metro.config.js — enable package.json "exports" field so
// 'phosphor-react-native/regular' resolves via the subpath exports map.
// Also add a custom resolver to polyfill wildcard subpath patterns
// (e.g. "./regular/icons/*") which Metro does not yet support natively.
step('patch metro.config.js for package exports');
fs.writeFileSync(
  path.join(benchDir, 'metro.config.js'),
  `const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');
const config = getDefaultConfig(__dirname);
// Enable package.json "exports" field resolution (needed for per-weight
// subpath imports like 'phosphor-react-native/regular')
config.resolver.unstable_enablePackageExports = true;
// Experimental tree shaking (SDK 52+): keep full graph, then dead-code-eliminate.
if (${TREE_SHAKE}) {
  config.transformer.getTransformOptions = async () => ({
    transform: { experimentalImportSupport: true, inlineRequires: true },
  });
}
// Metro does not support wildcard subpath patterns in "exports" maps.
// Polyfill: intercept all deep icon imports before Metro touches the
// exports map, resolving them directly to the correct file on disk.
//   phosphor-react-native/src/icons/<Icon>       → src/icons/<Icon>.tsx
//   phosphor-react-native/<weight>/icons/<Icon>  → lib/module/<weight>/icons/<Icon>.js
config.resolver.resolveRequest = (context, moduleName, platform) => {
  const m = moduleName.match(/^phosphor-react-native\\/([a-z]+)\\/icons\\/(.+)$/);
  if (m) {
    const [, weight, icon] = m;
    const candidate = weight === 'src'
      ? path.join(__dirname, 'node_modules', 'phosphor-react-native',
          'src', 'icons', icon + '.tsx')
      : path.join(__dirname, 'node_modules', 'phosphor-react-native',
          'lib', 'module', weight, 'icons', icon + '.js');
    if (fs.existsSync(candidate)) {
      return { type: 'sourceFile', filePath: candidate };
    }
  }
  return context.resolveRequest(context, moduleName, platform);
};
module.exports = config;
`
);
ok();

// Reinstall the tarball — skip only when --no-pack is set (implies reuse).
if (!NO_PACK) {
  step('install phosphor-react-native from tarball');
  try {
    run(`npm install --legacy-peer-deps "${tarballPath}"`, benchDir, !VERBOSE);
    ok();
  } catch (e) {
    die(`tarball install failed: ${e.stderr || e.message}`);
  }
} else {
  console.log(`  │  skipping install (--no-pack)`);
}

if (SETUP_ONLY) {
  console.log(
    '\n  Setup complete. Run without --setup-only to start the benchmark.\n'
  );
  process.exit(0);
}

// ── Icon discovery ────────────────────────────────────────────────────────────

const libIndex = path.join(
  benchDir,
  'node_modules/phosphor-react-native/lib/module/index.js'
);
if (!fs.existsSync(libIndex)) die(`Installed library missing: ${libIndex}`);

const barrel = fs.readFileSync(libIndex, 'utf8');
const icons = [
  ...barrel.matchAll(/export \* from ['"]\.\/icons\/(\w+)['"]/g),
].map((m) => m[1]);
if (!icons.length) die('No icons found in installed lib/module/index.js');

const [I1 = 'Acorn', I2 = 'List', I3 = 'Palette'] = icons;
const W = TARGET_WEIGHT;

console.log(
  `  │  ${icons.length} icons in tarball. Sample: ${I1}, ${I2}, ${I3}`
);
console.log(`  └─ per-weight target: ${W}`);

// ── App.tsx templates ─────────────────────────────────────────────────────────

/**
 * Produces a minimal but valid Expo App.tsx with the given import + JSX usage.
 * Keeps surrounding boilerplate identical across scenarios so the only variable
 * is the phosphor-react-native import.
 */
function makeApp(importBlock, iconJsx) {
  return `import { View } from 'react-native';
${importBlock}

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      ${iconJsx}
    </View>
  );
}
`;
}

const scenarios = [
  // ── Baseline: no phosphor import ───────────────────────────────────────────
  {
    id: 'baseline',
    label: 'Baseline — no phosphor import',
    app: makeApp('', '<View />'),
  },

  // ── Main barrel (react-native field → src/index.tsx via Metro) ─────────────
  // Metro resolves 'phosphor-react-native' via the "react-native" field in
  // package.json, which points to src/index.tsx (TypeScript source).
  {
    id: 'barrel-1',
    label: `Main barrel, 1 icon  (${I1}Icon)`,
    app: makeApp(
      `import { ${I1}Icon } from 'phosphor-react-native';`,
      `<${I1}Icon size={24} color="black" />`
    ),
  },
  {
    id: 'barrel-3',
    label: `Main barrel, 3 icons  (${I1}, ${I2}, ${I3})`,
    app: makeApp(
      `import { ${I1}Icon, ${I2}Icon, ${I3}Icon } from 'phosphor-react-native';`,
      `<${I1}Icon size={24} color="black" /><${I2}Icon size={24} color="black" /><${I3}Icon size={24} color="black" />`
    ),
  },

  // ── Src deep import (react-native field → src/icons/<Icon>.tsx) ──────────
  // Metro follows the "react-native" field to src/index.tsx, but a user can
  // also import directly from the per-icon source file.  This path skips the
  // barrel entirely and lets Metro tree-shake at the file level.
  {
    id: 'src-deep-1',
    label: `Src deep import, 1 icon  (${I1}Icon)`,
    app: makeApp(
      `import { ${I1}Icon } from 'phosphor-react-native/src/icons/${I1}';`,
      `<${I1}Icon size={24} color="black" />`
    ),
  },
  {
    id: 'src-deep-3',
    label: `Src deep import, 3 icons  (${I1}, ${I2}, ${I3})`,
    app: makeApp(
      `import { ${I1}Icon } from 'phosphor-react-native/src/icons/${I1}';
import { ${I2}Icon } from 'phosphor-react-native/src/icons/${I2}';
import { ${I3}Icon } from 'phosphor-react-native/src/icons/${I3}';`,
      `<${I1}Icon size={24} color="black" /><${I2}Icon size={24} color="black" /><${I3}Icon size={24} color="black" />`
    ),
  },

  // ── Per-weight subpath (exports field → lib/module/<weight>/index.js) ──────
  // Metro resolves 'phosphor-react-native/regular' via the "exports" map,
  // landing in lib/module/regular/index.js (compiled, single-weight).
  {
    id: 'subpath-1',
    label: `Subpath /${W}, 1 icon  (${I1}Icon)`,
    app: makeApp(
      `import { ${I1}Icon } from 'phosphor-react-native/${W}';`,
      `<${I1}Icon size={24} color="black" />`
    ),
  },
  {
    id: 'subpath-3',
    label: `Subpath /${W}, 3 icons  (${I1}, ${I2}, ${I3})`,
    app: makeApp(
      `import { ${I1}Icon, ${I2}Icon, ${I3}Icon } from 'phosphor-react-native/${W}';`,
      `<${I1}Icon size={24} color="black" /><${I2}Icon size={24} color="black" /><${I3}Icon size={24} color="black" />`
    ),
  },

  // ── Subpath deep import (per-weight compiled file, no barrel at all) ────────
  // Goes directly to lib/module/<weight>/icons/<Icon>.js — the deepest
  // possible import, one file per icon, zero barrel overhead.
  {
    id: 'subpath-deep-1',
    label: `Subpath deep /${W}/icons, 1 icon  (${I1}Icon)`,
    app: makeApp(
      `import { ${I1}Icon } from 'phosphor-react-native/${W}/icons/${I1}';`,
      `<${I1}Icon size={24} color="black" />`
    ),
  },
  {
    id: 'subpath-deep-3',
    label: `Subpath deep /${W}/icons, 3 icons  (${I1}, ${I2}, ${I3})`,
    app: makeApp(
      `import { ${I1}Icon } from 'phosphor-react-native/${W}/icons/${I1}';
import { ${I2}Icon } from 'phosphor-react-native/${W}/icons/${I2}';
import { ${I3}Icon } from 'phosphor-react-native/${W}/icons/${I3}';`,
      `<${I1}Icon size={24} color="black" /><${I2}Icon size={24} color="black" /><${I3}Icon size={24} color="black" />`
    ),
  },
];

// ── Phase 3: benchmark ────────────────────────────────────────────────────────

/**
 * Walk the export output dir and return the path to the largest .js/.hbc file.
 * expo export → dist/_expo/static/js/ios/<App>-<hash>.js
 */
function findBundle(dir) {
  const hits = [];
  function walk(d) {
    for (const entry of fs.readdirSync(d)) {
      const full = path.join(d, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        walk(full);
        continue;
      }
      if (/\.(js|hbc)$/.test(entry)) hits.push({ path: full, size: stat.size });
    }
  }
  if (!fs.existsSync(dir)) return null;
  walk(dir);
  hits.sort((a, b) => b.size - a.size);
  return hits[0]?.path ?? null;
}

const minifyArg = NO_MINIFY ? '--no-minify' : '';
// Experimental tree shaking env vars (must be set on the CLI process; they
// are ignored in development mode and only apply to production exports).
const treeShakeEnv = TREE_SHAKE
  ? 'EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1 EXPO_UNSTABLE_TREE_SHAKING=1 '
  : '';
const exportCmd =
  `${treeShakeEnv}npx expo export --platform ios --output-dir .bench-dist --clear ${minifyArg}`.trimEnd();

header('Benchmark');
console.log(`  │  ${exportCmd}`);
console.log(`  │  ${scenarios.length} scenarios — each takes ~20–60 s\n`);

const results = [];

for (const scenario of scenarios) {
  step(scenario.label);
  fs.writeFileSync(path.join(benchDir, 'App.tsx'), scenario.app);
  fs.removeSync(distDir);

  try {
    run(exportCmd, benchDir, !VERBOSE);
  } catch (err) {
    console.log('✗');
    if (VERBOSE) console.error(err.stderr || err.message);
    results.push({ ...scenario, error: true });
    continue;
  }

  const bundlePath = findBundle(distDir);
  if (!bundlePath) {
    console.log('✗  (bundle not found)');
    results.push({ ...scenario, error: true });
    continue;
  }

  const bytes = fs.readFileSync(bundlePath);
  const raw = bytes.length;
  const gz = gzipSync(bytes).length;

  ok(`${(raw / 1024).toFixed(1)} kB raw · ${(gz / 1024).toFixed(1)} kB gz`);
  results.push({ ...scenario, raw, gz, bundlePath });
}

// ── Phase 4: report ───────────────────────────────────────────────────────────

function fmtKB(n) {
  return `${(n / 1024).toFixed(1)} kB`;
}

function fmtDelta(base, val) {
  if (!base || val === base) return '—';
  const d = ((val - base) / base) * 100;
  return `${d > 0 ? '+' : ''}${d.toFixed(0)}%`;
}

const baseline = results.find((r) => r.id === 'baseline' && !r.error);

// Compute label column width from the actual labels so numbers always align.
const LW = Math.max(...results.map((r) => r.label.length)) + 2;
const RW = 11; // minified
const GW = 10; // gz
const DW =  8; // vs base
const HR = `  ${'─'.repeat(LW + RW + GW + DW + 6)}`;

console.log(`

  ╔══════════════════════════════════════════════════════════════════╗
  ║     Phosphor React Native — Metro Bundle Size Report            ║
  ╚══════════════════════════════════════════════════════════════════╝

  Platform   : iOS
  Minified   : ${NO_MINIFY ? 'no' : 'yes'}
  Weight     : ${W}
  Tree-shake : ${TREE_SHAKE ? 'yes (experimental)' : 'no'}
  Tarball    : ${tarball}
  Bundler    : real Metro via \`expo export --platform ios\`
${HR}
  ${'Scenario'.padEnd(LW)} ${'minified'.padStart(RW)} ${'gz'.padStart(GW)} ${'vs base'.padStart(DW)}
${HR}`);

for (const r of results) {
  if (r.error) {
    console.log(`  ${r.label.padEnd(LW)} ${'✗'.padStart(RW + GW + DW + 4)}`);
    continue;
  }
  const raw   = fmtKB(r.raw).padStart(RW);
  const gz    = fmtKB(r.gz).padStart(GW);
  const delta = fmtDelta(baseline?.gz, r.gz).padStart(DW);
  console.log(`  ${r.label.padEnd(LW)} ${raw} ${gz} ${delta}`);
}

console.log(`${HR}

  Sizes include the full Metro runtime + all resolved dependencies.
  "vs base" = gzip delta relative to the no-phosphor baseline.

  Tips:
    --verbose      show Metro output per scenario
    --no-minify    compare unminified sizes
    --weight <w>   change per-weight subpath  (default: regular)
    --no-pack      skip npm pack + install  (reuse existing tarball)
    --setup        force-recreate the bench Expo app
    --tree-shake   Expo experimental tree shaking
                   metro: experimentalImportSupport + inlineRequires
                   env:   EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1 EXPO_UNSTABLE_TREE_SHAKING=1
`);
