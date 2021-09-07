import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  const matrixCopy = new Array(matrix.length);

  for (let i = 0; i < matrixCopy.length; i++) {
    matrixCopy[i] = new Array(matrix[0].length);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrixCopy[i][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        if (i === 0
          && j === 0) {
          matrixCopy[i][j + 1]++;
          matrixCopy[i + 1][j]++;
          matrixCopy[i + 1][j + 1]++;
        } else if (i === 0
          && j === matrixCopy[0].length - 1) {
          matrixCopy[i][j - 1]++;
          matrixCopy[i + 1][j - 1]++;
          matrixCopy[i + 1][j]++;
        } else if (i === matrixCopy.length - 1
          && j === 0) {
          matrixCopy[i - 1][j]++;
          matrixCopy[i - 1][j + 1]++;
          matrixCopy[i][j + 1]++;
        } else if (
          i === matrixCopy.length - 1
          && j === matrixCopy[0].length - 1
        ) {
          matrixCopy[i - 1][j - 1]++;
          matrixCopy[i - 1][j]++;
          matrixCopy[i][j - 1]++;
        } else if (i === 0) {
          matrixCopy[i][j - 1]++;
          matrixCopy[i][j + 1]++;
          matrixCopy[i + 1][j - 1]++;
          matrixCopy[i + 1][j]++;
          matrixCopy[i + 1][j + 1]++;
        } else if (i === matrixCopy.length - 1) {
          matrixCopy[i - 1][j - 1]++;
          matrixCopy[i - 1][j]++;
          matrixCopy[i - 1][j + 1]++;
          matrixCopy[i][j - 1]++;
          matrixCopy[i][j + 1]++;
        } else if (j === 0) {
          matrixCopy[i - 1][j]++;
          matrixCopy[i - 1][j + 1]++;
          matrixCopy[i][j + 1]++;
          matrixCopy[i + 1][j]++;
          matrixCopy[i + 1][j + 1]++;
        } else if (j === matrixCopy[0].length - 1) {
          matrixCopy[i - 1][j - 1]++;
          matrixCopy[i - 1][j]++;
          matrixCopy[i][j - 1]++;
          matrixCopy[i + 1][j - 1]++;
          matrixCopy[i + 1][j]++;
        } else {
          matrixCopy[i - 1][j - 1]++;
          matrixCopy[i - 1][j]++;
          matrixCopy[i - 1][j + 1]++;
          matrixCopy[i][j - 1]++;
          matrixCopy[i][j + 1]++;
          matrixCopy[i + 1][j - 1]++;
          matrixCopy[i + 1][j]++;
          matrixCopy[i + 1][j + 1]++;
        }
      }
    }
  }
  return matrixCopy;
}
