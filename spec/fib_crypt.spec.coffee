FibCrypt = require('../fib_crypt')

describe 'FibCrypt.encrypt', ->
  it 'should encrypt uppercase letters', ->
    (expect FibCrypt.encrypt('A')).toEqual 'B'
    (expect FibCrypt.encrypt('Z')).toEqual 'A'

  it 'should encrypt lowercase letters', ->
    (expect FibCrypt.encrypt('a')).toEqual 'b'
    (expect FibCrypt.encrypt('z')).toEqual 'a'

  it 'should not encrypt non-alphabetic characters', ->
    (expect FibCrypt.encrypt('!')).toEqual '!'
    (expect FibCrypt.encrypt('1')).toEqual '1'

  it 'should encrypt uppercase letters given a position', ->
    (expect FibCrypt.encrypt('H', 0)).toEqual 'I'
    (expect FibCrypt.encrypt('I', 1)).toEqual 'J'

    (expect FibCrypt.encrypt('D', 2)).toEqual 'F'
    (expect FibCrypt.encrypt('A', 3)).toEqual 'D'
    (expect FibCrypt.encrypt('N', 4)).toEqual 'S'
    (expect FibCrypt.encrypt('I', 5)).toEqual 'Q'
    (expect FibCrypt.encrypt('E', 6)).toEqual 'R'
    (expect FibCrypt.encrypt('L', 7)).toEqual 'G'
    (expect FibCrypt.encrypt('L', 8)).toEqual 'T'
    (expect FibCrypt.encrypt('E', 9)).toEqual 'H'

  it 'should encrypt lowercase letters given a position', ->
    (expect FibCrypt.encrypt('h', 0)).toEqual 'i'
    (expect FibCrypt.encrypt('i', 1)).toEqual 'j'

    (expect FibCrypt.encrypt('d', 2)).toEqual 'f'
    (expect FibCrypt.encrypt('a', 3)).toEqual 'd'
    (expect FibCrypt.encrypt('n', 4)).toEqual 's'
    (expect FibCrypt.encrypt('i', 5)).toEqual 'q'
    (expect FibCrypt.encrypt('e', 6)).toEqual 'r'
    (expect FibCrypt.encrypt('l', 7)).toEqual 'g'
    (expect FibCrypt.encrypt('l', 8)).toEqual 't'
    (expect FibCrypt.encrypt('e', 9)).toEqual 'h'

  it 'should not encrypt non-alphabetic characters given a position', ->
    (expect FibCrypt.encrypt('!', 0)).toEqual '!'
    (expect FibCrypt.encrypt('1', 1)).toEqual '1'

  it 'should encrypt multi-character strings', ->
    (expect FibCrypt.encrypt('Hi Danielle!')).toEqual 'Ij Fdsqrgth!'

  it 'should encrypt multi-character strings given a position', ->
    (expect FibCrypt.encrypt('Iceland.', 73)).toEqual 'Fkjyssa.'

describe 'FibCrypt.decrypt', ->
  it 'should decrypt uppercase letters', ->
    (expect FibCrypt.decrypt('B')).toEqual 'A'
    (expect FibCrypt.decrypt('A')).toEqual 'Z'

  it 'should decrypt lowercase letters', ->
    (expect FibCrypt.decrypt('b')).toEqual 'a'
    (expect FibCrypt.decrypt('a')).toEqual 'z'

  it 'should not decrypt non-alphabetic characters', ->
    (expect FibCrypt.decrypt('!')).toEqual '!'
    (expect FibCrypt.decrypt('1')).toEqual '1'

  it 'should decrypt uppercase letters given a position', ->
    (expect FibCrypt.decrypt('I', 0)).toEqual 'H'
    (expect FibCrypt.decrypt('J', 1)).toEqual 'I'

    (expect FibCrypt.decrypt('F', 2)).toEqual 'D'
    (expect FibCrypt.decrypt('D', 3)).toEqual 'A'
    (expect FibCrypt.decrypt('S', 4)).toEqual 'N'
    (expect FibCrypt.decrypt('Q', 5)).toEqual 'I'
    (expect FibCrypt.decrypt('R', 6)).toEqual 'E'
    (expect FibCrypt.decrypt('G', 7)).toEqual 'L'
    (expect FibCrypt.decrypt('T', 8)).toEqual 'L'
    (expect FibCrypt.decrypt('H', 9)).toEqual 'E'

  it 'should decrypt lowercase letters given a position', ->
    (expect FibCrypt.decrypt('i', 0)).toEqual 'h'
    (expect FibCrypt.decrypt('j', 1)).toEqual 'i'

    (expect FibCrypt.decrypt('f', 2)).toEqual 'd'
    (expect FibCrypt.decrypt('d', 3)).toEqual 'a'
    (expect FibCrypt.decrypt('s', 4)).toEqual 'n'
    (expect FibCrypt.decrypt('q', 5)).toEqual 'i'
    (expect FibCrypt.decrypt('r', 6)).toEqual 'e'
    (expect FibCrypt.decrypt('g', 7)).toEqual 'l'
    (expect FibCrypt.decrypt('t', 8)).toEqual 'l'
    (expect FibCrypt.decrypt('h', 9)).toEqual 'e'

  it 'should not decrypt non-alphabetic characters given a position', ->
    (expect FibCrypt.decrypt('!', 0)).toEqual '!'
    (expect FibCrypt.decrypt('1', 1)).toEqual '1'

  it 'should decrypt multi-character strings', ->
    (expect FibCrypt.decrypt('Ij Fdsqrgth!')).toEqual 'Hi Danielle!'

  it 'should decrypt multi-character strings given a position', ->
    (expect FibCrypt.decrypt('Fkjyssa.', 73)).toEqual 'Iceland.'
