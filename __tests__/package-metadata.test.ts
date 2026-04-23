import pkg from '../package.json';

describe('package.json metadata', () => {
  it('has sideEffects: false for tree shaking', () => {
    expect((pkg as Record<string, unknown>).sideEffects).toBe(false);
  });

  it('has an exports field for modern bundler resolution', () => {
    const exports = (pkg as Record<string, unknown>).exports as
      | Record<string, unknown>
      | undefined;
    expect(exports).toBeDefined();
    expect(exports!['.']).toBeDefined();
  });

  it('exports field has import (ESM) and require (CJS) conditions', () => {
    const exports = (pkg as Record<string, unknown>).exports as Record<
      string,
      Record<string, Record<string, string>>
    >;
    const main = exports['.'];
    expect(main.import).toBeDefined();
    expect(main.require).toBeDefined();
    expect(main.import.types).toBeDefined();
    expect(main.require.types).toBeDefined();
  });

  it('does not expose weight-specific subpath exports', () => {
    const exports = (pkg as Record<string, unknown>).exports as Record<
      string,
      unknown
    >;
    const weights = ['regular', 'bold', 'thin', 'light', 'fill', 'duotone'];
    for (const weight of weights) {
      expect(exports[`./${weight}`]).toBeUndefined();
      expect(exports[`./${weight}/icons/*`]).toBeUndefined();
    }
  });
});
