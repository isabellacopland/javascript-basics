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

const isSquare = (a) => {
  if (a<0) { return false;}
  if (a === 0) {return true;}
  if (Math.sqrt(a) % 1 === 0) {return true; }
  else {return false;}
  };

const startsWith = (a, string) => {
  if (a === string.charAt(0)) {return true;}
  else 
  {return false;}
};

const containsVowels = (string) => {
  if (string.includes('a')) {return true;} 
  if (string.includes('e')) {return true;}
  if (string.includes('i')) {return true;}
  if (string.includes('o')) {return true;}
  if (string.includes('u')) {return true;}
  if (string.includes('A')) {return true;} 
  if (string.includes('E')) {return true;}
  if (string.includes('I')) {return true;}
  if (string.includes('O')) {return true;}
  if (string.includes('U')) {return true;}
  else {return false; }
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
