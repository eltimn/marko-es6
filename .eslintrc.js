const path = require('path')

module.exports = {
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  env: {
    es6: true,
    node: true,
    jquery: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.marko']
      }
    },
    'import/extensions': [
      '.js',
      '.marko',
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ]
  },
  rules: {
    'prettier/prettier': ['error', {'semi': false, 'singleQuote': true}],
    'class-methods-use-this': 'off', // doesn't work with "singleton" pattern used, in e.g. Fetch
    'func-names': 'off',
    'import/no-extraneous-dependencies': 'off', // has issues with app alias
    'import/extensions': ['error', 'always', {
      js: 'never',
      marko: 'never'
    }],
    'no-underscore-dangle': 'off', // doesn't like _id from Mongo
    'object-shorthand': 'off',
    'prefer-destructuring': 'off',
    'quote-props': 'off'
  },
  globals: {
    lift: false,
    Acm: false,
    moment: false,
    angular: false
  }
}
