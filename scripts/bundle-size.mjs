#!/usr/bin/env node
/**
 * scripts/bundle-size.mjs
 *
 * Measures tree-shaken, minified ESM bundle sizes across three import strategies:
 *
 *   A. Main barrel   — import { AcornIcon } from 'phosphor-react-native'
 *   B. Source direct — import { AcornIcon } from './src/...'  (Metro / RN path)
 *   C. Per-weight    — import { AcornIcon } from 'phosphor-react-native/regular'
 *
 * Usage:
 *   node scripts/bundle-size.mjs
 *   node scripts/bundle-size.mjs --verbose    # show esbuild warnings/errors
 *   node scripts/bundle-size.mjs --weight bold # change per-weight comparison target
 *
 * Pre-requisites (built library):
 *   node generator/generate-svg.mjs
 *   node scripts/build-weights.mjs
 */

import { build } from 'esbuild';
import { gzipSync } from 'zlib';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

// ── CLI flags ─────────────────────────────────────────────────────────────────

const VERBOSE = process.argv.includes('--verbose');
const WEIGHT_FLAG_IDX = process.argv.indexOf('--weight');
const TARGET_WEIGHT =
  WEIGHT_FLAG_IDX !== -1 ? process.argv[WEIGHT_FLAG_IDX + 1] : 'regular';

const EXTERNALS = ['react', 'react-native', 'react-native-svg'];

// ── utilities ─────────────────────────────────────────────────────────────────

function kB(n) {
  return `${(n / 1024).toFixed(2)} kB`;
}

function delta(baseline, gz) {
  if (baseline === null || baseline === gz) return '';
  const pct = ((gz - baseline) / baseline) * 100;
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(0)}%`;
}

let _tmpIdx = 0;
async function bundleSize(source, alias = {}) {
  const tmpFile = path.join(root, `.bundle-size-tmp-${++_tmpIdx}.tsx`);
  fs.writeFileSync(tmpFile, source);
  try {
    const result = await build({
      entryPoints: [tmpFile],
      bundle: true,
      treeShaking: true,
      minify: true,
      write: false,
      format: 'esm',
      external: EXTERNALS,
      alias,
      platform: 'neutral',
      logLevel: VERBOSE ? 'warning' : 'silent',
    });
    const bytes = Buffer.from(result.outputFiles[0].contents);
    return { raw: bytes.length, gz: gzipSync(bytes).length };
  } finally {
    fs.removeSync(tmpFile);
  }
}

// ── pre-flight checks ─────────────────────────────────────────────────────────

function assertExists(filePath, hint) {
  if (!fs.existsSync(filePath)) {
    const rel = path.relative(root, filePath);
    console.error(`\n  ✗ Required file not found: ${rel}`);
    if (hint) console.error(`    → ${hint}`);
    process.exit(1);
  }
}

assertExists(
  path.join(root, 'lib/module/index.js'),
  'Run: yarn build  (or: node generator/generate-svg.mjs && react-native-builder-bob build)'
);
assertExists(
  path.join(root, `lib/module/${TARGET_WEIGHT}/index.js`),
  `Run: node scripts/build-weights.mjs  (weight '${TARGET_WEIGHT}' not built)`
);
assertExists(
  path.join(root, 'src/index.tsx'),
  'Run: node generator/generate-svg.mjs'
);

// ── discover available icons ──────────────────────────────────────────────────

const barrelSrc = fs.readFileSync(
  path.join(root, 'lib/module/index.js'),
  'utf8'
);
const ICONS = [
  ...barrelSrc.matchAll(/export \* from ['"]\.\/icons\/(\w+)['"]/g),
].map((m) => m[1]);

if (ICONS.length === 0) {
  console.error(
    '\n  ✗ No icons found in lib/module/index.js — is the library built?\n'
  );
  process.exit(1);
}

const ONE = ICONS.slice(0, 1);
const THREE = ICONS.slice(0, Math.min(3, ICONS.length));
const ALL = ICONS;

// ── alias helpers ─────────────────────────────────────────────────────────────

/** esbuild alias: 'phosphor-react-native' → lib/module/index.js */
const libAlias = {
  'phosphor-react-native': path.join(root, 'lib/module/index.js'),
};

/** esbuild aliases for all available per-weight subpaths */
const WEIGHTS = ['regular', 'bold', 'thin', 'light', 'fill', 'duotone'];
const subpathAlias = Object.fromEntries(
  WEIGHTS.map((w) => [
    `phosphor-react-native/${w}`,
    path.join(root, 'lib/module', w, 'index.js'),
  ]).filter(([, p]) => fs.existsSync(p))
);

// ── code generators ───────────────────────────────────────────────────────────

/** Entry that imports from the main barrel or a subpath package name */
function barrelEntry(icons, pkg = 'phosphor-react-native') {
  const names = icons.map((n) => `${n}Icon`).join(', ');
  return `import { ${names} } from '${pkg}'; export { ${names} };`;
}

/** Entry that imports a single icon directly from compiled lib output */
function libDirectEntry(icon) {
  return `import { ${icon}Icon } from './lib/module/icons/${icon}'; export { ${icon}Icon };`;
}

/** Entry that imports directly from src/icons/<Icon>.tsx (multi-weight) */
function srcMultiWeightEntry(icon) {
  return `import { ${icon}Icon } from './src/icons/${icon}'; export { ${icon}Icon };`;
}

/** Entry that imports directly from src/<weight>/icons/<Icon>.tsx (single-weight) */
function srcSingleWeightEntry(icon, weight = 'regular') {
  return `import { ${icon}Icon } from './src/${weight}/icons/${icon}'; export { ${icon}Icon };`;
}

// ── scenarios ─────────────────────────────────────────────────────────────────

const scenarios = [
  // ── A. Compiled lib barrel ────────────────────────────────────────────────
  {
    title: `A. Compiled lib barrel  (import from 'phosphor-react-native')`,
    desc: `lib/module/index.js — what bundlers use via the exports field`,
    rows: [
      {
        label: `1 icon   — ${ONE[0]}Icon`,
        code: barrelEntry(ONE),
        alias: libAlias,
      },
      ...(THREE.length > 1
        ? [
            {
              label: `${THREE.length} icons  — ${THREE.map((n) => n + 'Icon').join(' + ')}`,
              code: barrelEntry(THREE),
              alias: libAlias,
            },
          ]
        : []),
      ...(ALL.length > THREE.length
        ? [
            {
              label: `${ALL.length} icons  — all available`,
              code: barrelEntry(ALL),
              alias: libAlias,
            },
          ]
        : []),
    ],
  },

  // ── B. Source imports (Metro / react-native field) ─────────────────────────
  {
    title: `B. Source imports  (import from src/)`,
    desc: `What Metro bundler resolves via the "react-native" field in package.json`,
    rows: [
      {
        label: `src barrel    — src/index.tsx, 1 icon`,
        code: `import { ${ONE[0]}Icon } from './src/index'; export { ${ONE[0]}Icon };`,
        alias: {},
      },
      {
        label: `src deep      — src/icons/${ONE[0]}.tsx (multi-weight)`,
        code: srcMultiWeightEntry(ONE[0]),
        alias: {},
      },
      ...(fs.existsSync(
        path.join(root, `src/${TARGET_WEIGHT}/icons/${ONE[0]}.tsx`)
      )
        ? [
            {
              label: `src per-weight — src/${TARGET_WEIGHT}/icons/${ONE[0]}.tsx`,
              code: srcSingleWeightEntry(ONE[0], TARGET_WEIGHT),
              alias: {},
            },
          ]
        : []),
    ],
  },

  // ── C. Per-weight subpath ─────────────────────────────────────────────────
  {
    title: `C. Per-weight subpath  (import from 'phosphor-react-native/${TARGET_WEIGHT}')`,
    desc: `lib/module/${TARGET_WEIGHT}/index.js — single weight, no Map lookup`,
    rows: [
      {
        label: `1 icon   — ${ONE[0]}Icon`,
        code: barrelEntry(ONE, `phosphor-react-native/${TARGET_WEIGHT}`),
        alias: subpathAlias,
      },
      ...(THREE.length > 1
        ? [
            {
              label: `${THREE.length} icons  — ${THREE.map((n) => n + 'Icon').join(' + ')}`,
              code: barrelEntry(
                THREE,
                `phosphor-react-native/${TARGET_WEIGHT}`
              ),
              alias: subpathAlias,
            },
          ]
        : []),
      ...(ALL.length > THREE.length
        ? [
            {
              label: `${ALL.length} icons  — all available`,
              code: barrelEntry(ALL, `phosphor-react-native/${TARGET_WEIGHT}`),
              alias: subpathAlias,
            },
          ]
        : []),
    ],
  },
];

// ── render report ─────────────────────────────────────────────────────────────

const W_LABEL = 54;
const W_RAW = 11;
const W_GZ = 11;
const W_DELTA = 9;

function line(label, raw, gz, ref) {
  const d = delta(ref, gz);
  const col = d.startsWith('+') ? '' : d.startsWith('-') ? '' : '';
  process.stdout.write(
    `  ${label.padEnd(W_LABEL)}` +
      `  ${kB(raw).padStart(W_RAW)}` +
      `  ${kB(gz).padStart(W_GZ)}` +
      `  ${d.padStart(W_DELTA)}\n`
  );
}

function ruler() {
  return `  ${'─'.repeat(W_LABEL + 2 + W_RAW + 2 + W_GZ + 2 + W_DELTA)}`;
}

console.log(
  `\n  ╔══════════════════════════════════════════════════════════════════════════╗`
);
console.log(
  `  ║          Phosphor React Native — Bundle Size Report                     ║`
);
console.log(
  `  ╚══════════════════════════════════════════════════════════════════════════╝`
);
console.log(`\n  Icons available: ${ALL.length}  (${ALL.join(', ')})`);
console.log(`  Externals excluded: ${EXTERNALS.join(', ')}`);
console.log(
  `  Per-weight target: ${TARGET_WEIGHT}  (change with --weight <name>)\n`
);

let errCount = 0;

for (const { title, desc, rows } of scenarios) {
  console.log(`  ${title}`);
  console.log(`  ${desc}`);
  console.log(ruler());
  console.log(
    `  ${'Scenario'.padEnd(W_LABEL)}` +
      `  ${'minified'.padStart(W_RAW)}` +
      `  ${'min+gz'.padStart(W_GZ)}` +
      `  ${'vs [0]'.padStart(W_DELTA)}`
  );
  console.log(ruler());

  let baseline = null;
  for (const { label, code, alias } of rows) {
    try {
      const { raw, gz } = await bundleSize(code, alias);
      if (baseline === null) baseline = gz;
      line(label, raw, gz, baseline);
    } catch (err) {
      errCount++;
      console.log(`  ${'ERROR: ' + label}`.slice(0, W_LABEL + 2));
      if (VERBOSE) console.error(`    ${err.message}`);
    }
  }
  console.log('');
}

if (errCount > 0) {
  console.error(
    `  ${errCount} scenario(s) failed. Re-run with --verbose for details.\n`
  );
  process.exit(1);
}

console.log(
  `  Methodology: esbuild bundle+treeshake+minify, ESM output, externals excluded.`
);
console.log(
  `  "min+gz" (gzip) is the closest proxy to real-world download size.\n`
);
