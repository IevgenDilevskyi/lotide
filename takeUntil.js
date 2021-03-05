const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)){
      results.push(item);
    } else {
      return results
    }
  }
  return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
// [ 1, 2, 5, 7, 2 ]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const data3 = [false,false, false, true, false, false, true];
const results3 = takeUntil(data3, x => x === true);
console.log(results3);
// [ false, false, false ]

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

assertArraysEqual(results1, [1, 2, 5, 7, 2])
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'  ])
assertArraysEqual(results3, [ false, false, false])