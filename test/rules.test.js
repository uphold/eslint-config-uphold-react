'use strict';

/**
 * Module dependencies.
 */

const Linter = require('eslint/lib/cli-engine');
const path = require('path');

/**
 * Tests for `eslint-config-uphold-react`.
 */

describe('eslint-config-uphold-react', () => {
  const linter = new Linter({ configFile: path.join(__dirname, '..', 'src', 'index.js') });

  test('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');

    expect(linter.executeOnFiles([source]).errorCount).toEqual(0);
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const rules = linter.executeOnFiles([source]).results[0].messages.map(violation => violation.ruleId);

    expect(rules).toMatchSnapshot();
  });
});
