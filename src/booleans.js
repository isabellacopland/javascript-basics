const negate = (a) => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => {
  if (a || b) {
    return false;
   } else {
      return true; }
  };

const one = (a, b) => {
  if (a != b) {
    return true; }
    else {
      return false;
    }
  };

const truthiness = (a) => {
  if (a) {
    return true; } else {
      return false; }
  };

function isEqual(a, b) {
  // your code here
};

function isGreaterThan(a, b) {
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  // your code here
};

function isOdd(a) {
  // your code here
};

function isEven(a) {
  // your code here
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
