import * as path from 'path';
import * as fs from 'fs';

describe('lib/module/package.json', () => {
  it('declares type: module so .js files in module output are treated as ESM', () => {
    const pkgPath = path.resolve(
      __dirname,
      '../lib/module/package.json'
    );
    expect(fs.existsSync(pkgPath)).toBe(true);
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    expect(pkg.type).toBe('module');
  });
});
