import * as path from 'path';
import * as fs from 'fs';

const WEIGHTS = ['regular', 'bold', 'thin', 'light', 'fill', 'duotone'];
const root = path.resolve(__dirname, '..');

describe('per-weight subpath outputs', () => {
  it.each(WEIGHTS)('src/%s is not generated anymore', (weight) => {
    const filePath = path.join(root, 'src', weight);
    expect(fs.existsSync(filePath)).toBe(false);
  });
});
