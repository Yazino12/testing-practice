module.exports = {};

// Task 1
module.exports.stringLength = (string) => {
  if (string && string.length > 0 && string.length <= 10) return string.length;
  else {
    throw new Error('Not matching conditions');
  }
};

// Task 2
module.exports.reverseString = (string) => {
  return string.split('').reverse().join('');
};

// Task 3
module.exports.calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// Task 4
module.exports.capitalize = (string) => {
  let firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1);
};
