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
  let result = [];
  for (let y = 0; y < matrix.length; y++){
    result[y] = [];
    for (let x = 0; x < matrix[0].length; x++){ 
      if (matrix[y][x] === true) {
        result[y][x] = 1;}
      else { 
        result[y][x] = 0;

        if (y > 0) {
          if (matrix[y-1][x-1]) {result[y][x] += 1}
          if (matrix[y-1][x]) {result[y][x] += 1}
          if (matrix[y-1][x+1]) {result[y][x] += 1}          
        }
        
        if (matrix[y][x-1]) {result[y][x] += 1}
        if (matrix[y][x]) {result[y][x] += 1}
        if (matrix[y][x+1]) {result[y][x] += 1}
        
        if (y < matrix.length - 1) {
          if (matrix[y+1][x-1]) {result[y][x] += 1}
          if (matrix[y+1][x]) {result[y][x] += 1}
          if (matrix[y+1][x+1]) {result[y][x] += 1}          
        }
      }
    }    
  }
  return result;
}

module.exports = {
  minesweeper
};
