module.exports = {
  root: true,
  plugins: ['import'],

  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],

  settings: {
    'import/extensions': ['.js', 'jsx', '.ts', '.tsx', '.d.ts'],
  },

  rules: {
    'jsdoc/require-jsdoc': 'off',
    'react/require-default-props': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
