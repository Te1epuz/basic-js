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
  if (!Array.isArray(arr)) { throw Error(`'arr' parameter must be an instance of the Array!`); }
  let result = [];
  let discarded = false;
  for (let i = 0; i <= arr.length - 1; i++) {

    if (arr[i] === '--discard-next') {
      i++;
      discarded = true;
      continue;
    }
    else if (arr[i] === '--discard-prev') {
      if (discarded === false) {
        result.pop();
      }
    }
    else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        result.push(arr[i+1], arr[i+1]);
      }
      i++;
    }
    else if (arr[i] === '--double-prev') {
      if (i > 0) {
        if (discarded === false) {
          result.push(arr[i-1]);
        }
      };
    }
    else {
      result.push(arr[i]);
    }
    discarded = false;

  }
  return result;
}

module.exports = {
  transform
};
