const sayHello = function(string) {
  return 'Hello, ' + (string) + '!';
};

const uppercase = string => string.toUpperCase();

const lowercase = string => string.toLowerCase();

const countCharacters = string => string.length;

const firstCharacter = string => string.charAt(0);

function firstCharacters (string, n) {
  // your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
