'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const baseConfig = require('../src');
const path = require('path');

const linter = new ESLint({ baseConfig });

/**
 * Tests for `eslint-config-uphold-react`.
 */

describe('eslint-config-uphold-react', () => {
  test('should not generate any violation for correct code', async () => {
    const [result] = await linter.lintFiles([path.join(__dirname, 'fixtures', 'correct.js')]);

    expect(result.errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', async () => {
    const [result] = await linter.lintFiles([path.join(__dirname, 'fixtures', 'incorrect.js')]);

    const violations = result.messages.map(({ column, line, ruleId, severity }) => ({
      column,
      line,
      ruleId,
      severity
    }));

    expect(violations).toMatchSnapshot();
  });
});
