# eslint-config-uphold-react

Uphold-flavored React ESLint config. Extends [`eslint-config-uphold`](https://github.com/uphold/eslint-config-uphold).

[![npm][npm-image]][npm-url]
[![Tests][tests-image]][tests-url]

## Installation

```sh
npm install eslint eslint-config-uphold-react --save-dev
```

## Usage

Create an `.eslintrc.yml` file with the following:

```yaml
extends: uphold-react
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

and run the linter with:

```sh
npm run lint
```

[npm-image]: https://img.shields.io/npm/v/eslint-config-uphold-react.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-uphold-react
[tests-image]: https://github.com/uphold/eslint-config-uphold-react/actions/workflows/tests.yaml/badge.svg?branch=master
[tests-url]: https://github.com/uphold/eslint-config-uphold-react/actions/workflows/tests.yaml
