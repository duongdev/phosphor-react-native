import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'node_modules/',
      'lib/',
      'bundle-bench/',
      'src/icons/',
      'src/index.tsx',
      'example/',
      'core/',
    ],
  },
  // CommonJS files: allow require() and module.exports
  {
    files: ['**/*.cjs', 'jest.config.js', '__mocks__/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.commonjs,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  eslintPluginPrettierRecommended,
];
