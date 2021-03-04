const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.toUpperCase());

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  } 
  
  return true
}

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`💯💯💯 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
}

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ])
assertArraysEqual(results3, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])

