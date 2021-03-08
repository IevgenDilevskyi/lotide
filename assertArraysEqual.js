const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`💯💯💯 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
}

module.exports = assertArraysEqual;