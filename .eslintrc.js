module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
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
}
