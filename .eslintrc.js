/* eslint-disable quote-props */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],

  // Custom rules or overrides
  rules: {
    // javascript standard
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'indent': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-unused-vars': ['warn'],
    'prefer-const': ['warn'],
    'require-await': ['warn'],
    'no-unreachable': ['warn'],

    // vue specific rules
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 0
    }],

    'vue/max-attributes-per-line': ['warn', {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],

    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'never'
    }],

    'no-multi-spaces': ['error', {
      'exceptions': { 'VariableDeclarator': true }
    }],

    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        'validate',
        'fetch',
        'asyncData',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/no-unused-vars': ['warn'],
    'vue/no-unused-components': ['warn'],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off'
  }
}
