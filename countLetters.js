// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const words = sentence.replace(/\s/g, "").split("");
  const newobj = {};
  for (const character of words) {
    if (!newobj[character]) {
      newobj[character] = 1;
    } else {
      newobj[character]++;
    }
  }
  return newobj;
};

// TEST CODE

const result = countLetters("Lighthouse Labs");
const expected = {
  L: 2,
  i: 1,
  g: 1,
  h: 2,
  t: 1,
  o: 1,
  u: 1,
  s: 2,
  e: 1,
  a: 1,
  b: 1,
};

assertEqual(JSON.stringify(result), JSON.stringify(expected));
