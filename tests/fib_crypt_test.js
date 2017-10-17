const test = require('./test_helper');
const FibCrypt = require('../fib_crypt');

test('FibCrypt.encrypt', [
  { expected: 'I', actual: FibCrypt.encrypt('H', 0) },
  { expected: 'J', actual: FibCrypt.encrypt('I', 1) },

  { expected: 'F', actual: FibCrypt.encrypt('D', 2) },
  { expected: 'D', actual: FibCrypt.encrypt('A', 3) },
  { expected: 'S', actual: FibCrypt.encrypt('N', 4) },
  { expected: 'Q', actual: FibCrypt.encrypt('I', 5) },
  { expected: 'R', actual: FibCrypt.encrypt('E', 6) },
  { expected: 'G', actual: FibCrypt.encrypt('L', 7) },
  { expected: 'T', actual: FibCrypt.encrypt('L', 8) },
  { expected: 'H', actual: FibCrypt.encrypt('E', 9) },

  { expected: 'F', actual: FibCrypt.encrypt('I', 73) },
  { expected: 'K', actual: FibCrypt.encrypt('C', 74) },
  { expected: 'J', actual: FibCrypt.encrypt('E', 75) },
  { expected: 'Y', actual: FibCrypt.encrypt('L', 76) },
  { expected: 'S', actual: FibCrypt.encrypt('A', 77) },
  { expected: 'S', actual: FibCrypt.encrypt('N', 78) },
  { expected: 'A', actual: FibCrypt.encrypt('D', 79) },

  { expected: 'IJ FDSQRGTH!', actual: FibCrypt.encrypt('HI DANIELLE!') },
  { expected: 'IJ FDSQRGTH!', actual: FibCrypt.encrypt('HI DANIELLE!', 0) },
  { expected: 'FKJYSSA.', actual: FibCrypt.encrypt('ICELAND.', 73) },
]);

test('FibCrypt.decrypt', [
  { expected: 'H', actual: FibCrypt.decrypt('I', 0) },
  { expected: 'I', actual: FibCrypt.decrypt('J', 1) },

  { expected: 'D', actual: FibCrypt.decrypt('F', 2) },
  { expected: 'A', actual: FibCrypt.decrypt('D', 3) },
  { expected: 'N', actual: FibCrypt.decrypt('S', 4) },
  { expected: 'I', actual: FibCrypt.decrypt('Q', 5) },
  { expected: 'E', actual: FibCrypt.decrypt('R', 6) },
  { expected: 'L', actual: FibCrypt.decrypt('G', 7) },
  { expected: 'L', actual: FibCrypt.decrypt('T', 8) },
  { expected: 'E', actual: FibCrypt.decrypt('H', 9) },

  { expected: 'I', actual: FibCrypt.decrypt('F', 73) },
  { expected: 'C', actual: FibCrypt.decrypt('K', 74) },
  { expected: 'E', actual: FibCrypt.decrypt('J', 75) },
  { expected: 'L', actual: FibCrypt.decrypt('Y', 76) },
  { expected: 'A', actual: FibCrypt.decrypt('S', 77) },
  { expected: 'N', actual: FibCrypt.decrypt('S', 78) },
  { expected: 'D', actual: FibCrypt.decrypt('A', 79) },

  { expected: 'HI DANIELLE!', actual: FibCrypt.decrypt('IJ FDSQRGTH!') },
  { expected: 'HI DANIELLE!', actual: FibCrypt.decrypt('IJ FDSQRGTH!', 0) },
  { expected: 'ICELAND.', actual: FibCrypt.decrypt('FKJYSSA.', 73) },
]);
