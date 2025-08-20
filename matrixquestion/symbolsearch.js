function countSymbolInMatrix(matrix, symbol) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === symbol) {
        count++;
      }
    }
  }
  return count;
}
const matrix = [
  ["A", "B", "C"],
  ["B", "A", "B"],
  ["C", "B", "A"],
];
console.log(countSymbolInMatrix(matrix, "A"));
