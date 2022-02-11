module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'max-classes-per-file': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    "prefer-destructuring": 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
