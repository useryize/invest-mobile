
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
    // "indent": [
    //   2,
    //   4
    // ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ],
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
