const fs = require('fs');
const bigInt = require('big-integer');
const fib = require('./fib');

const CODE_A = code('A');
const NUM_LETTERS = 26;

function code(char) {
  return char.charCodeAt(0);
}

function isUpperCase(char) {
  return char.match(/[A-Z]/);
}

function isLowerCase(char) {
  return char.match(/[a-z]/);
}

function fibCipher(n) {
  return fib(n).mod(NUM_LETTERS);
}

function rotateLetter(letter, n) {
  let offset = code(letter) - CODE_A;
  let rotatedOffset = (NUM_LETTERS + offset + n % NUM_LETTERS) % NUM_LETTERS;
  return String.fromCharCode(CODE_A + rotatedOffset);
}

function rotateString(string, cipher, position=0) {
  return string.split('').map((char) => {
    if (isUpperCase(char)) {
      return rotateLetter(char, cipher(position++));
    } else if (isLowerCase(char)) {
      return rotateLetter(char.toUpperCase(), cipher(position++)).toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

function encrypt(string, position=0) {
  return rotateString(string, fibCipher, position);
}

function decrypt(string, position=0) {
  return rotateString(string, (n) => { return -fibCipher(n); }, position);
}

function decryptFile(filepath) {
  let data = fs.readFileSync(filepath, 'utf8');
  return decrypt(data);
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt,
  decryptFile: decryptFile
};
