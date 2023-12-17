const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = [];
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next':  
        i++;
        break;
      case '--discard-prev': 
      if(arr[i - 2] != '--discard-next') {
        array.pop();
        break;
      } 
        break;
      case '--double-next':  
        i++;
        let doubleNextNumber = arr[i];
        if(i < arr.length) {
          array.push(doubleNextNumber);
          array.push(doubleNextNumber);
          break
        }
        else
          break;
      case '--double-prev':  
        if(arr[i - 2] != '--discard-next' && i != 0) {
          let doublePrevNumber = arr[i - 1];
          array.push(doublePrevNumber);
          break
        }
        break;
      default:
        array.push(arr[i]);
        break;
    }
  }
  return array;
}

module.exports = {
  transform
};
