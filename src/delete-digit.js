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
  let arr = n.toString().split('');
  let result = +arr[0];
  for (let i = 0; i < arr.length; i++){
    let new_arr = [...arr];
    new_arr.splice(i,1);
    if (+new_arr.join('') > result) {result = +new_arr.join('')}
  }
  return result;
}

module.exports = {
  deleteDigit
};
