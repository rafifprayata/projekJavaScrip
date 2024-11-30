import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; 

test('sum: menambah dua angka positif', () => {
  const result = sum(3, 4);
  assert.strictEqual(result, 7, '3 + 4 harus sama dengan 7');
});

test('sum: menambah dengan angka negatif', () => {
  const result1 = sum(-3, 4);
  assert.strictEqual(result1, 0, 'Harus mengembalikan 0 karena salah satu angka negatif');

  const result2 = sum(3, -4);
  assert.strictEqual(result2, 0, 'Harus mengembalikan 0 karena salah satu angka negatif');

  const result3 = sum(-3, -4);
  assert.strictEqual(result3, 0, 'Harus mengembalikan 0 karena kedua angka negatif');
});

test('sum: menambah dengan input non-numerik', () => {
  const result1 = sum('3', 4);
  assert.strictEqual(result1, 0, 'Harus mengembalikan 0 karena input pertama bukan angka');

  const result2 = sum(3, '4');
  assert.strictEqual(result2, 0, 'Harus mengembalikan 0 karena input kedua bukan angka');

  const result3 = sum('3', '4');
  assert.strictEqual(result3, 0, 'Harus mengembalikan 0 karena kedua input bukan angka');

  const result4 = sum({}, 4);
  assert.strictEqual(result4, 0, 'Harus mengembalikan 0 karena input pertama bukan angka');

  const result5 = sum(3, []);
  assert.strictEqual(result5, 0, 'Harus mengembalikan 0 karena input kedua bukan angka');
});

test('sum: menambah dengan angka 0', () => {
  const result1 = sum(0, 4);
  assert.strictEqual(result1, 4, '0 + 4 harus sama dengan 4');

  const result2 = sum(3, 0);
  assert.strictEqual(result2, 3, '3 + 0 harus sama dengan 3');

  const result3 = sum(0, 0);
  assert.strictEqual(result3, 0, '0 + 0 harus sama dengan 0');
});

test('sum: menambah dua angka yang sama', () => {
  const result = sum(5, 5);
  assert.strictEqual(result, 10, '5 + 5 harus sama dengan 10');
});
