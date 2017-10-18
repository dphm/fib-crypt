bigInt = require('big-integer')
fib = require('../fib')

describe 'fib', ->
  it 'should return the correct values for small numbers', ->
    (expect fib(0)).toEqual bigInt(1)
    (expect fib(1)).toEqual bigInt(1)
    (expect fib(2)).toEqual bigInt(2)
    (expect fib(3)).toEqual bigInt(3)
    (expect fib(4)).toEqual bigInt(5)

  it 'should return the correct values for large numbers', ->
    (expect fib(50)).toEqual bigInt('20365011074')
    (expect fib(100)).toEqual bigInt('573147844013817084101')
    (expect fib(200)).toEqual bigInt('453973694165307953197296969697410619233826')
