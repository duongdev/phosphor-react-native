/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      // Node-only tests: package metadata, file structure, build output checks
      displayName: 'node',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/__tests__/package-*.test.ts', '<rootDir>/__tests__/lib-*.test.ts'],
      transform: {
        '^.+\\.tsx?$': [
          'babel-jest',
          {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-typescript',
            ],
          },
        ],
      },
    },
    {
      // React Native component tests
      displayName: 'react-native',
      preset: 'react-native',
      testMatch: ['<rootDir>/__tests__/icon-*.test.ts'],
      transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|react-native-svg/)',
      ],
    },
  ],
};
