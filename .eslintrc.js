module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
  ],
  plugins: ['prettier', 'wdio'],
  // add your custom rules here
  rules: {},
}
