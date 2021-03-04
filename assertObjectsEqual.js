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

const eqObjects = function(object1, object2) {
  const keyNum1 = Object.keys(object1);
  const keyNum2 = Object.keys(object2);
  if (keyNum1.length !== keyNum2.length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`💯💯💯 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


// const assertArraysEqual = function(arrOne, arrTwo) {
//   if (eqArrays(arrOne, arrTwo) === true) {
//     console.log(`💯💯💯 Assertion Passed: ${arrOne} === ${arrTwo}`);
//   } else {
//     console.log(`😭😭😭 Assertion Failed: ${arrOne} !== ${arrTwo}`);
//   }
// }
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);