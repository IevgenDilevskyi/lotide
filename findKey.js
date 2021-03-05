const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const obj1 = {
  stars1: 1,
  stars2: 3,
  stars3: 2,
  stars4: 9999,
  stars5: 2,
  stars6: 3
};

const obj2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const obj3 = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


assertEqual(findKey(obj1, x => x === 9999), "stars4");
assertEqual(findKey(obj2, x => x.stars === 2), "noma");
assertEqual(findKey(obj3, x => x !== "The Expanse"), "comedy");
