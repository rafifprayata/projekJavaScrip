import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js'; // Impor fungsi sum dari index.js


test('sum function should add two numbers correctly', () => {

  assert.strictEqual(sum(2, 3), 5, 'Expected sum(2, 3) to be 5');

  assert.strictEqual(sum(-1, 1), 0, 'Expected sum(-1, 1) to be 0');

  assert.strictEqual(sum(0, 0), 0, 'Expected sum(0, 0) to be 0');

  assert.strictEqual(sum(-5, -5), -10, 'Expected sum(-5, -5) to be -10');
});
