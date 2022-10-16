const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      res[i].push(0);
    }
  }

  const matrixWidth = matrix[0].length,
    matrixHeight = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        res[i][j] = 1;

        if (j + 1 < matrixWidth && matrix[i][j + 1] !== true) res[i][j + 1] += 1; //right elem
        if (i + 1 < matrixHeight && j + 1 < matrixWidth && matrix[i + 1][j + 1] !== true) res[i + 1][j + 1] += 1; //right - down elem
        if (i + 1 < matrixHeight && matrix[i + 1][j] !== true) res[i + 1][j] += 1; //down elem
        if (i + 1 < matrixHeight && j - 1 < matrixWidth && j - 1 >= 0 && matrix[i + 1][j - 1] !== true) res[i + 1][j - 1] += 1; //left - down elem
        if (j - 1 < matrixWidth && j - 1 >= 0 && matrix[i][j - 1] !== true) res[i][j - 1] += 1; //left elem
        if (j - 1 < matrixWidth && j - 1 >= 0 && i - 1 < matrixHeight && i - 1 >= 0 && matrix[i - 1][j - 1] !== true) res[i - 1][j - 1] += 1; //left-top elem
        if (i - 1 < matrixHeight && i - 1 >= 0 && matrix[i - 1][j] !== true) res[i - 1][j] += 1; //top elem
        if (i - 1 < matrixHeight && i - 1 >= 0 && j + 1 < matrixWidth && matrix[i - 1][j + 1] !== true) res[i - 1][j + 1] += 1; //top-right elem
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
