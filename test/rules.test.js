'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const { describe, it } = require('node:test');
const { join } = require('node:path');
const baseConfig = require('../src');

const linter = new ESLint({ baseConfig });

/**
 * Tests for `eslint-config-uphold-react`.
 */

describe('eslint-config-uphold-react', () => {
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
