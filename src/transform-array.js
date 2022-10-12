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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    let resArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        switch (arr[i]) {
          case '--discard-next':
            if (arr[i] !== arr.length - 1) {
              i++;
            }
            break;
          case '--discard-prev':
            if (arr[i - 1] && arr[i - 2] !== '--discard-next') {
              resArr.pop();
            }
            break;
          case '--double-next':
            if (arr[i + 1]) {
              resArr.push(arr[i + 1]);
            }
            break;
          case '--double-prev':
            if (arr[i - 1] && arr[i - 2] !== '--discard-next') {
              resArr.push(arr[i - 1]);
            }
            break;
          default:
            if (arr[i - 1] !== '--discard-next') {
              resArr.push(arr[i]);
            }
            break;
        }
      }
    }
    return resArr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

}

//console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])) //[1, 2, 3, 4, 4, 5]

module.exports = {
  transform
};
