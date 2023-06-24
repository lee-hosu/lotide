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
    console.log(`✅ Assertion Passed 🥳`);
  } else {
    console.log(`❌ Assertion Failed 🥲`);
  }
};
// ----------------------------------------------------------------
// ? how to add each letter to an object as a key?
// ? how to get the letter index from the string?
// ? how to push add array as the value to the object key?

// const letterPositions = function (string) {
//   const results = {};
//   for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     if (results[letter]) {
//       results[letter].push(i);
//     } else {
//       results[letter] = [i];
//     }
//   }
//   return results;
// };

const letterPositions = function (string) {
  const results = {};
  let index = 0;
  for (let letter of string) {
    if (letter === " ") {
      index++;
      continue;
    }
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
    index++;
  }
  return results; //?
};

// TEST CODE
assertArraysEqual(
  JSON.stringify(letterPositions("hello")),
  JSON.stringify({
    h: [0],
    e: [1],
    l: [2, 3],
    o: [4],
  })
);

assertArraysEqual(
  JSON.stringify(letterPositions("lighthouse in the house")),
  JSON.stringify({
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12],
  })
);

console.log(JSON.stringify(letterPositions("lighthouse in the house")));
console.log(
  JSON.stringify({
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12],
  })
);
