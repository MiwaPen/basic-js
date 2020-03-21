module.exports = function countCats(matrix) {
  return matrix.flat().filter(item => item == '^^').length;
  // remove line with error and write your code here
};
