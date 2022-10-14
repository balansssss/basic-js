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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let lett = null;
  let lettCount = 1;
  let res = '';

  function getCount(count) {
    return count > 1 ? count : '';
  }

  if (str.length === 1 || str === '') return str;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      lett = str[i];
    } else if (str[i] === lett) {
      lettCount += 1;
    } else {
      res += getCount(lettCount) + lett;
      lett = str[i];
      lettCount = 1;
    }
  }
  return res += getCount(lettCount) + lett;
}

module.exports = {
  encodeLine
};
