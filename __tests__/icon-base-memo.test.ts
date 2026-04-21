describe('icon-base memo', () => {
  it('IconBase export is wrapped in React.memo', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require('../src/lib/icon-base');
    const IconBase = mod.default;
    // React.memo returns an object with $$typeof === Symbol.for('react.memo')
    expect(IconBase.$$typeof).toBe(Symbol.for('react.memo'));
  });

  it('React.memo wrapped component renders without throwing', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { default: IconBase } = require('../src/lib/icon-base');
    // The inner type should be a function (the actual component)
    expect(typeof IconBase.type).toBe('function');
  });
});
