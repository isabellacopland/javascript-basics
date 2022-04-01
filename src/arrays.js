const getNthElement = (index, array) => {
  if(index >= array.length) {
    return array[index % array.length];
  } else {
    return array[index];
  }
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return Array.from(numbers.join(''));
};

const uppercaseWordsInArray = strings => {
 return strings.map(element => {
   return element.toUpperCase()
 });
};

const reverseWordsInArray = strings => {
return strings.map(elements => {
  return elements.split('').reverse('').join('')
});
};

const onlyEven = numbers => {
  return numbers.filter(element => {
    return element % 2 === 0;
  });
};

const removeNthElement2 = (index, array) => {
const result = array.slice();
result.splice(index,1);
return result;
};

const elementsStartingWithAVowel = strings => {

};

const removeSpaces = string => {
return string.replace(/\s+/g, '');
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
