const test = require('./test_helper');
const FibCode = require('../fib_code');

test('FibCode.encode', [
  { expected: 'I', actual: FibCode.encode('H', 0) },
  { expected: 'J', actual: FibCode.encode('I', 1) },

  { expected: 'F', actual: FibCode.encode('D', 2) },
  { expected: 'D', actual: FibCode.encode('A', 3) },
  { expected: 'S', actual: FibCode.encode('N', 4) },
  { expected: 'Q', actual: FibCode.encode('I', 5) },
  { expected: 'R', actual: FibCode.encode('E', 6) },
  { expected: 'G', actual: FibCode.encode('L', 7) },
  { expected: 'T', actual: FibCode.encode('L', 8) },
  { expected: 'H', actual: FibCode.encode('E', 9) },

  { expected: 'F', actual: FibCode.encode('I', 73) },
  { expected: 'K', actual: FibCode.encode('C', 74) },
  { expected: 'J', actual: FibCode.encode('E', 75) },
  { expected: 'Y', actual: FibCode.encode('L', 76) },
  { expected: 'S', actual: FibCode.encode('A', 77) },
  { expected: 'S', actual: FibCode.encode('N', 78) },
  { expected: 'A', actual: FibCode.encode('D', 79) },

  { expected: 'IJ FDSQRGTH!', actual: FibCode.encode('HI DANIELLE!') },
  { expected: 'IJ FDSQRGTH!', actual: FibCode.encode('HI DANIELLE!', 0) },
  { expected: 'FKJYSSA.', actual: FibCode.encode('ICELAND.', 73) },
]);

test('FibCode.decode', [
  { expected: 'H', actual: FibCode.decode('I', 0) },
  { expected: 'I', actual: FibCode.decode('J', 1) },

  { expected: 'D', actual: FibCode.decode('F', 2) },
  { expected: 'A', actual: FibCode.decode('D', 3) },
  { expected: 'N', actual: FibCode.decode('S', 4) },
  { expected: 'I', actual: FibCode.decode('Q', 5) },
  { expected: 'E', actual: FibCode.decode('R', 6) },
  { expected: 'L', actual: FibCode.decode('G', 7) },
  { expected: 'L', actual: FibCode.decode('T', 8) },
  { expected: 'E', actual: FibCode.decode('H', 9) },

  { expected: 'I', actual: FibCode.decode('F', 73) },
  { expected: 'C', actual: FibCode.decode('K', 74) },
  { expected: 'E', actual: FibCode.decode('J', 75) },
  { expected: 'L', actual: FibCode.decode('Y', 76) },
  { expected: 'A', actual: FibCode.decode('S', 77) },
  { expected: 'N', actual: FibCode.decode('S', 78) },
  { expected: 'D', actual: FibCode.decode('A', 79) },

  { expected: 'HI DANIELLE!', actual: FibCode.decode('IJ FDSQRGTH!') },
  { expected: 'HI DANIELLE!', actual: FibCode.decode('IJ FDSQRGTH!', 0) },
  { expected: 'ICELAND.', actual: FibCode.decode('FKJYSSA.', 73) },
]);
