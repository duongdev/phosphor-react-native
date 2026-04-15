/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      // Node-only tests: package metadata, file structure, build output checks, memoization
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/__tests__/package-*.test.ts',
        '<rootDir>/__tests__/lib-*.test.ts',
        '<rootDir>/__tests__/icon-*.test.ts',
      ],
      transform: {
        '^.+\\.tsx?$': [
          'babel-jest',
          {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        ],
      },
      moduleNameMapper: {
        'react-native-svg': '<rootDir>/__mocks__/react-native-svg.js',
        'react-native': '<rootDir>/__mocks__/react-native.js',
      },
    },
  ],
};
