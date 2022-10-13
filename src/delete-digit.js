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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const nArr = String(n).split('');
  const res = [];
  for (let i = 0; i < nArr.length; i++) {
    res.push(Number(nArr.filter((e, index) => index !== i).join('')));
  }
  return res.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
