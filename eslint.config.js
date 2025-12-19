const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({ baseDirectory: __dirname })

module.exports = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: ['.next/**', 'node_modules/**', 'build/**', 'dist/**', 'eslint.config.js']
  },
  {
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  }
]
