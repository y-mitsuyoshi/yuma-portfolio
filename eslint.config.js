// eslint.config.js - Flat config (ESLint v10)
const globals = require('globals')
const vue = require('eslint-plugin-vue')
const prettierPlugin = require('eslint-plugin-prettier')
const eslintConfigPrettier = require('eslint-config-prettier')

module.exports = [
  {
    ignores: [
      '.nuxt/**',
      '.output/**',
      '.firebase/**',
      '.cache/**',
      'dist/**',
      'node_modules/**',
    ],
  },
  ...vue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'any',
            normal: 'any',
            component: 'any',
          },
          svg: 'any',
        },
      ],
    },
  },
]
