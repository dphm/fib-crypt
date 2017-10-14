const bigInt = require('big-integer');

let fibs = [];

function fibonacci(n) {
  if (n < 2) {
    return bigInt(1);
  } else {
    return bigInt(fib(n - 1)).plus(bigInt(fib(n - 2)));
  }
}

function fib(n) {
  return fibs[n] ? fibs[n] : fibs[n] = fibonacci(n);
}

module.exports = fib;
