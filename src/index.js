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
  extends: ['uphold', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  plugins: ['import', 'react', 'react-hooks', 'sort-class-members'],
  root: true,
  rules: {
    'array-callback-return': 'off',
    'import/default': 'error',
    'import/named': 'error',
    'import/no-unresolved': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'new-cap': ['error', { capIsNewExceptions: ['BigNumber'] }],
    'promise/prefer-await-to-then': 'off',
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(has|is|should)[A-Z]([A-Za-z0-9]?)+'
      }
    ],
    'react/display-name': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never'
      }
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
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
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    'sort-class-members/sort-class-members': [
      'error',
      {
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
      }
    ]
    /* eslint-enable sort-keys-fix/sort-keys-fix */
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};
