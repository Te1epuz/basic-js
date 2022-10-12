const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {return 'Unable to determine the time of year!'}
  if (toString.call(date) !== '[object Date]') {throw Error('Invalid date!');}
  if (Object.keys(date).length > 0) {throw Error('Invalid date!');}
  let result = '';
  if (date.getMonth() < 2 || date.getMonth() === 11) {result = 'winter'}
  else if (date.getMonth() < 5) {result = 'spring'}
  else if (date.getMonth() < 8) {result = 'summer'}
  else {result = 'fall'}
  return result;
}

module.exports = {
  getSeason
};
