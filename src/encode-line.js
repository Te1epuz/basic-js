const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = [];
  str = str.split('');

  for (let i = 0; i < str.length; i++){
    if (str[i] !== str[i + 1]) { result.push(str[i]) }
    else {
      let sum = 1;
      let j = i;
      while (str[i] === str[i + 1]){
        i++;
        sum++;
      }
      result.push(sum, str[j])
    }
  }  
  return result.join('');
}


module.exports = {
  encodeLine
};
