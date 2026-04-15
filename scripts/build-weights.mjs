/**
 * Build per-weight subpath outputs.
 *
 * For each weight (regular, bold, thin, light, fill, duotone) this script:
 *  1. Compiles src/<weight>/ to ESM → lib/module/<weight>/
 *  2. Compiles src/<weight>/ to CJS → lib/commonjs/<weight>/
 *  3. Emits .d.ts declarations → lib/typescript/<weight>/
 *
 * The outputs correspond to the subpath entries declared in package.json exports.
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const WEIGHTS = ['regular', 'bold', 'thin', 'light', 'fill', 'duotone'];

const tsc = path.join(root, 'node_modules', 'typescript', 'bin', 'tsc');

function buildWeight(weight) {
  const srcWeight = path.join(root, 'src', weight);

  if (!fs.existsSync(srcWeight)) {
    console.warn(`[build-weights] src/${weight}/ not found, skipping (run 'yarn generate' first)`);
    return;
  }

  console.log(`[build-weights] Building ${weight}...`);

  const baseConfig = {
    extends: '../../tsconfig.build.json',
    compilerOptions: {
      paths: {
        'phosphor-react-native': ['../../src/index'],
      },
      baseUrl: './',
      // rootDir must cover src/lib too (pulled in transitively), so use src/ parent
      rootDir: '../',
      // Never write JS output into the source tree on failure
      noEmitOnError: true,
    },
    include: ['./**/*'],
    exclude: [],
  };

  // ─── ESM (module) ────────────────────────────────────────────────────────
  const esmConfig = {
    ...baseConfig,
    compilerOptions: {
      ...baseConfig.compilerOptions,
      module: 'esnext',
      moduleResolution: 'node',
      // outDir is parent lib/module/ so that src/regular/ → lib/module/regular/
      outDir: path.join(root, 'lib', 'module'),
      declaration: false,
    },
  };

  // ─── CJS ─────────────────────────────────────────────────────────────────
  const cjsConfig = {
    ...baseConfig,
    compilerOptions: {
      ...baseConfig.compilerOptions,
      module: 'commonjs',
      moduleResolution: 'node',
      outDir: path.join(root, 'lib', 'commonjs'),
      declaration: false,
    },
  };

  // ─── Declarations ────────────────────────────────────────────────────────
  const dtsConfig = {
    ...baseConfig,
    compilerOptions: {
      ...baseConfig.compilerOptions,
      module: 'esnext',
      moduleResolution: 'node',
      outDir: path.join(root, 'lib', 'typescript'),
      declaration: true,
      emitDeclarationOnly: true,
    },
  };

  const tmpEsm = path.join(srcWeight, '_tsconfig.esm.json');
  const tmpCjs = path.join(srcWeight, '_tsconfig.cjs.json');
  const tmpDts = path.join(srcWeight, '_tsconfig.dts.json');

  try {
    fs.writeJsonSync(tmpEsm, esmConfig, { spaces: 2 });
    fs.writeJsonSync(tmpCjs, cjsConfig, { spaces: 2 });
    fs.writeJsonSync(tmpDts, dtsConfig, { spaces: 2 });

    execSync(`node ${tsc} --project ${tmpEsm}`, { stdio: 'inherit', cwd: srcWeight });
    execSync(`node ${tsc} --project ${tmpCjs}`, { stdio: 'inherit', cwd: srcWeight });
    execSync(`node ${tsc} --project ${tmpDts}`, { stdio: 'inherit', cwd: srcWeight });

    // Add CJS package.json marker
    const cjsOut = path.join(root, 'lib', 'commonjs', weight);
    fs.ensureDirSync(cjsOut);
    fs.writeJsonSync(path.join(cjsOut, 'package.json'), { type: 'commonjs' }, { spaces: 2 });

    console.log(`[build-weights] ✓ ${weight}`);
  } finally {
    fs.removeSync(tmpEsm);
    fs.removeSync(tmpCjs);
    fs.removeSync(tmpDts);
  }
}

for (const weight of WEIGHTS) {
  buildWeight(weight);
}
