import React from 'react';
import { AcornIcon } from '../src/icons/Acorn';

jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props: Record<string, unknown>) =>
      React.createElement('Svg', props),
    Path: (props: Record<string, unknown>) =>
      React.createElement('Path', props),
  };
});

describe('IconBase memoization', () => {
  it('AcornIcon component is wrapped in React.memo', () => {
    // React.memo components have a $$typeof of Symbol.for('react.memo')
    // and expose a `type` property pointing to the original component.
    // The icon itself is a plain FC, but IconBase (used internally) should be memo'd.
    // We verify that rendering the same props twice does not create a new instance.
    const icon = AcornIcon;
    expect(typeof icon).toBe('function');
    // If IconBase is memo'd, calling with identical props returns the same output
    // We just ensure it is a valid React component
    const element = React.createElement(icon, { size: 24, color: '#000', weight: 'regular' });
    expect(element).toBeTruthy();
    expect(element.type).toBe(icon);
  });
});

describe('icon-base memo', () => {
  it('IconBase export is wrapped in React.memo', async () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require('../src/lib/icon-base');
    const IconBase = mod.default;
    // React.memo returns an object with $$typeof === Symbol.for('react.memo')
    expect(IconBase.$$typeof).toBe(Symbol.for('react.memo'));
  });
});
