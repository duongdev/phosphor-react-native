import * as path from 'path';
import * as fs from 'fs';

const WEIGHTS = ['regular', 'bold', 'thin', 'light', 'fill', 'duotone'];
const root = path.resolve(__dirname, '..');

describe('per-weight subpath build outputs', () => {
  it.each(WEIGHTS)('lib/module/%s/index.js exists', (weight) => {
    const filePath = path.join(root, 'lib', 'module', weight, 'index.js');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it.each(WEIGHTS)('lib/commonjs/%s/index.js exists', (weight) => {
    const filePath = path.join(root, 'lib', 'commonjs', weight, 'index.js');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it.each(WEIGHTS)('lib/typescript/%s/index.d.ts exists', (weight) => {
    const filePath = path.join(root, 'lib', 'typescript', weight, 'index.d.ts');
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it.each(WEIGHTS)(
    'lib/commonjs/%s/package.json has type:commonjs',
    (weight) => {
      const pkgPath = path.join(
        root,
        'lib',
        'commonjs',
        weight,
        'package.json'
      );
      expect(fs.existsSync(pkgPath)).toBe(true);
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      expect(pkg.type).toBe('commonjs');
    }
  );

  it('regular subpath exports do NOT import from the full-weight defs Map', () => {
    const filePath = path.join(
      root,
      'lib',
      'module',
      'regular',
      'icons',
      'Acorn.js'
    );
    if (!fs.existsSync(filePath)) return; // skip if not built yet
    const content = fs.readFileSync(filePath, 'utf8');
    // Should NOT reference the full 6-weight defs map
    expect(content).not.toContain('new Map');
  });
});
