// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed 🥳`);
  } else {
    console.log(`❌ Assertion Failed 🥲`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const flatten = function (arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArray.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j]);
      }
    }
  }
  return newArray;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
