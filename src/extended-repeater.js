const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = '';

  let realRepeatTimes = 1;

  if (options.repeatTimes) {realRepeatTimes = options.repeatTimes}

    for (let i = 1; i <= realRepeatTimes; i++) {

    if (options.separator && i > 1) {
      result += options.separator;
    }
    else if (i > 1) {
      result += '+';
    }

    result += String(str);

    if (options.addition || options.addition === false || options.addition === null) {
      realAdditionRepeatTimes = 1;

    if (options.additionRepeatTimes) {realAdditionRepeatTimes = options.additionRepeatTimes}
      for (let i = 1; i <= realAdditionRepeatTimes; i++) {

        if (options.additionSeparator && i > 1) {
          result += options.additionSeparator;
        }
        else if (i > 1) {
          result += '|';
        }

        result += String(options.addition);

      }
    }
  }

  return result;
}

module.exports = {
  repeater
};
