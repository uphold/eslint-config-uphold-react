'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const { describe, it } = require('node:test');
const { join } = require('node:path');

/**
 * Tests for `eslint-config-uphold-react`.
 */

describe('eslint-config-uphold-react', () => {
  const linter = new ESLint({
    ignore: false,
    overrideConfigFile: join(__dirname, '..', 'src', 'index.js')
  });

  it('should not generate any violation for correct code', async test => {
    const [result] = await linter.lintFiles([join(__dirname, 'fixtures', 'correct.js')]);

    test.assert.equal(result.errorCount, 0);
  });

  it('should generate violations for incorrect code', async test => {
    const [result] = await linter.lintFiles([join(__dirname, 'fixtures', 'incorrect.js')]);

    const violations = result.messages.map(({ column, line, ruleId, severity }) => ({
      column,
      line,
      ruleId,
      severity
    }));

    test.assert.snapshot(violations);
  });
});
