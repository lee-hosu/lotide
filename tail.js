const assertEqual = require('./assertEqual');

const tail = function (arr) {
  if (arr.length < 1) {
    return undefined;
  } else {
    return arr.slice(1);
  }
};

module.exports = tail;
