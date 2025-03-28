# eslint-config-uphold-react

Uphold-flavored React ESLint config. Extends [`eslint-config-uphold`](https://github.com/uphold/eslint-config-uphold).

## Installation

```sh
npm install eslint eslint-config-uphold-react --save-dev
```

## Usage

Create an `eslint.config.js` file with the following content:

```js
const upholdReact = require('eslint-config-uphold-react');

module.exports = upholdReact;
```

If you want to extend the config, you can do so like this:

```js
const { defineConfig } = require('eslint/config');
const upholdReact = require('eslint-config-uphold-react');
const yourPlugin = require('your-eslint-plugin');

module.exports = defineConfig([
  {
    extends: [upholdReact],
    name: 'uphold-react-config',
    plugins: {
      'your-plugin': yourPlugin,
    },
    rules: {
      'your-plugin/rule-name': 'error'
    },
  }
]);
```

See [Using a Shareable Config][shareable-config-url] for more information.

and run the linter with:

```sh
npm run lint
```

[npm-image]: https://img.shields.io/npm/v/eslint-config-uphold-react.svg
[shareable-config-url]: https://eslint.org/docs/latest/developer-guide/shareable-configs
