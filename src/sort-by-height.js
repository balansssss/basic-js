const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*return arr.sort((a, b) => {
    if (a < b && a !== -1 && b !== -1) {
      return -1;
    }
    if (a > b && a !== -1 && b !== -1) {
      return 1;
    }
    return 0;
  })*/
  const sortArr = arr.filter(i => i !== -1).sort((a, b) => a - b);
  const resArr = [];
  let offset = 0; //Смещение элемнта
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resArr.push(arr[i]);
      offset += 1;
    } else {
      resArr.push(sortArr[i - offset]);
    }
  }
  return resArr;
}

module.exports = {
  sortByHeight
};
