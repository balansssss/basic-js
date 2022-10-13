const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const res = {}
  for (let i = 0; i < domains.length; i++) {
    const arrStr = domains[i].split('.').reverse();
    let prev = `.${arrStr[0]}`;
    for (let j = 0; j < arrStr.length; j++) {
      if (res[prev]) {
        res[prev] += 1;
      } else {
        res[prev] = 1;
      }
      prev += `.${arrStr[j + 1]}`;
    }
  }
  return res;
}


module.exports = {
  getDNSStats
};
