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

const isEqual = (a, b) => a === b;

const isGreaterThan = (a,b) => a > b;

const isLessThanOrEqualTo = (a,b) => a <= b;

const isOdd = (a) => {
  if (a % 2 === 1) { return true; } 
  else {
    return false; 
  }
};

const isEven = (a) => {
  if (a % 2 ===1) { return false; }
  else 
  {return true; }
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
