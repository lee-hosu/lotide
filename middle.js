const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function (arr) {
  const mid = arr.length / 2;
  if (arr.length > 2) {
    return arr.length % 2 === 0
      ? arr.slice(mid - 1, mid + 1)
      : arr.splice(Math.ceil(mid - 1), 1);
  } else {
    return [];
  }
};

module.exports = middle;