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

const without = function (arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    let newArray = [];
    for (element of arr1) {
      if (!arr2.includes(element)) {
        newArray.push(element);
      }
    }
    return newArray;
  }
};

// TEST CODE
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
