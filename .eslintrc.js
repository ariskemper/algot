/* eslint-disable prettier/prettier */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc', 'simple-import-sort', 'import'],
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
    // Type-checking rules
    '@typescript-eslint/strict-boolean-expressions': 'error', // Avoid code that may be unsafe when converted to a boolean
    '@typescript-eslint/no-floating-promises': 'error', // Disallow floating promises without error handling
    '@typescript-eslint/no-misused-promises': 'error', // Disallow no misuses promises without error handling
    '@typescript-eslint/restrict-template-expressions': 'warn', // Enforce template string expressions to be of string type
    '@typescript-eslint/no-unsafe-return': 'error', // Disallow returning any from a function

    // Best practices
    'array-callback-return': 'error', // Enforce return statements in callbacks of array’s methods
    'consistent-return': 'error', // Require return statements to either always or never specify values
    'no-await-in-loop': 'error', // Disallow await inside of loops
    'no-console': 'warn', // Warn on console.log statements in production code
    'no-template-curly-in-string': 'error', // Disallow template literals placeholder syntax in regular strings
    'no-return-await': 'off', // Disable base rule for no return await
    '@typescript-eslint/return-await': 'error', // Allow return await
    '@typescript-eslint/consistent-type-imports': 'error', // Enforce consistent usage of type imports.
    '@typescript-eslint/consistent-type-exports': 'error', // Enforce consistent usage of type exports.

    // Style
    'camelcase': 'error',
    'prettier/prettier': 'warn',
    'semi': ['error', 'never'],
    'quotes': [2, 'single'],

    // ES6+
    'prefer-const': 'error', // Suggest using const
    'no-var': 'error', // Require let or const instead of var

    // Import / exports sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error'
  }
}
