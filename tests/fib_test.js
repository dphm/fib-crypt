const bigInt = require('big-integer');
const test = require('./test_helper');
const fib = require('../fib');

test('fib', [
  { expected: bigInt(1), actual: fib(0) },
  { expected: bigInt(1), actual: fib(1) },
  { expected: bigInt(2), actual: fib(2) },
  { expected: bigInt(3), actual: fib(3) },
  { expected: bigInt(5), actual: fib(4) },

  { expected: bigInt('20365011074'), actual: fib(50) },
  { expected: bigInt('573147844013817084101'), actual: fib(100) },
  { expected: bigInt('453973694165307953197296969697410619233826'), actual: fib(200) }
]);
