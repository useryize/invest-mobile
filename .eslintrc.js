
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential', 
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'indent': 'off',
    "linebreak-style": 'off',
    "quotes": 'off',
    "semi": 'off',
    "one-var": [
      0,
      "always"
    ],
    "no-new": [
      0
    ],
    "camelcase": [
      0
    ]
  }
}
