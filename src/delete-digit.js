const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
  function deleteDigit(n) {
    const digits = n.toString();
    let largeNumber = Math.max(... digits);
    let indexOfLargeNumber = digits.lastIndexOf(largeNumber);
    
    if(digits.length === 2)
      return largeNumber;

    if(indexOfLargeNumber === 0){
      largeNumber = Math.max(... digits.slice(1));
      indexOfLargeNumber = digits.lastIndexOf(largeNumber);
    }

    return parseInt(digits.slice(0, (indexOfLargeNumber - 1)) + digits.slice(indexOfLargeNumber))
  }

module.exports = {
  deleteDigit
};
