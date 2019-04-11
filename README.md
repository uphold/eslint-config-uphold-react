# eslint-config-uphold-react

Uphold-flavored React ESLint config. Extends [`eslint-config-uphold`](https://github.com/uphold/eslint-config-uphold).

## Installation

```sh
$ npm install eslint eslint-config-uphold-react --save-dev
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
$ npm run lint
```