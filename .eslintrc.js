module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.css', '.styl', 'scss']
      }
    }
  },
  globals: {
    __PATH_PREFIX__: true,
    window: true,
    document: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    beforeEach: true,
    fetch: true,
    alert: true,
    google: true,
    lh: true
  },
  rules: {
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'operator-linebreak': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'valid-typeof': 0,
    'jsx-a11y/label-has-for': 0,
    'max-len': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/no-render-return-value': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    camelcase: 0,
    'prefer-template': 1,
    'react/no-unescaped-entities': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/no-array-index-key': 0,
    'global-require': 0,
    'react/jsx-indent': 1,
    'react/jsx-no-bind': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-one-expression-per-line': 0,
    'dot-notation': 1,
    'import/no-named-default': 1,
    'import/no-extraneous-dependencies': 0,
    'consistent-return': 1,
    'implicit-arrow-linebreak': 0,
    'import/first': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 1,
    'no-console': 0,
    'no-prototype-builtins': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-case-declarations': 0,
    'import/no-dynamic-require': 0,
    'no-unused-vars': ['error', { varsIgnorePattern: '^(globalStyles|styles|extractedValue)$' }],
    semi: [2, 'always'],
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-tag-spacing': [0, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/button-has-type': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.js', '.tsx'] }],
    'spaced-comment': [2, 'always', { markers: ['?'] }],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'import/no-unresolved': [0, {
      commonjs: true,
      caseSensitive: true
    }],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'propTypes',
          'props',
          'state',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'getChildContext',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'linebreak-style': 0
  }
};
