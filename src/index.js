/**
 * Export `uphold-react` shared configuration preset.
 */

module.exports = {
  env: {
    es6: true,
    jasmine: true,
    jest: true,
    mocha: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'uphold'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    'sort-class-members'
  ],
  root: true,
  rules: {
    'import/default': 'error',
    'import/named': 'error',
    'import/no-unresolved': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-extra-parens': ['error', 'all', {
      ignoreJSX: 'all'
    }],
    'react/display-name': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never'
    }],
    'react/jsx-curly-spacing': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': ['error', {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never'
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'warn',
    'react/self-closing-comp': 'error',
    'react/sort-prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    /* eslint-disable sort-keys */
    'sort-class-members/sort-class-members': ['error', {
      order: [
        '[static-properties-alpha]',
        '[static-methods-alpha]',
        '[properties-alpha]',
        '[constructor]',
        '[methods-alpha]'
      ],
      groups: {
        'static-properties-alpha': [{ type: 'property', static: true, sort: 'alphabetical' }],
        'static-methods-alpha': [{ type: 'method', static: true, sort: 'alphabetical' }],
        'properties-alpha': [{ type: 'property', propertyType: 'Literal', sort: 'alphabetical' }],
        'methods-alpha': [{ type: 'method', sort: 'alphabetical' }]
      }
    }]
    /* eslint-enable sort-keys */
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
