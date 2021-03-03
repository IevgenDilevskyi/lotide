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
assertArraysEqual(["1", "2", "3"], ["1", "2"])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual([], [])