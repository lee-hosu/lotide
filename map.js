// FUNCTION IMPLEMENTATION
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed 🥳 ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed 🥲 ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

// Test Cases
assertArraysEqual(
  map(words, (word) => word[word.length - 1]),
  ["d", "l", "o", "r", "m"]
);

assertArraysEqual(
  map(words, (word) => word.toUpperCase()),
  ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]
);

assertArraysEqual(
  map(words, (word) => word.length),
  [6, 7, 2, 5, 3]
);
