const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`💯💯💯 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    const i = (array.length / 2) - 0.5;
    middle.push(array[i]);
    return middle;
  }
  if (array.length % 2 === 0) {
    const iOne = (array.length / 2) - 1;
    const iTwo = array.length / 2;
    middle.push(array[iOne]);
    middle.push(array[iTwo]);
    return middle;
  }
};


assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 61, 2, 3, 4, 5, 6]), [61]);