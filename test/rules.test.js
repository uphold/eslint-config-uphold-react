'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('path');

/**
 * Tests for `eslint-config-uphold-react`.
 */

describe('eslint-config-uphold-react', () => {
  const linter = new ESLint({
    ignore: false,
    overrideConfigFile: path.join(__dirname, '..', 'src', 'index.js')
  });

  test('should not generate any violation for correct code', async () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');
    const results = await linter.lintFiles([source]);

    expect(results[0].errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const results = await linter.lintFiles([source]);

    const rules = results[0].messages.map(violation => violation.ruleId);

    expect(rules).toMatchSnapshot();
  });
});
