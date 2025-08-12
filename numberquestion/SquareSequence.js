function generateEmptySquareSequence(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let t = i * i - 1;
    result.push(t);
  }
  return result;
}
console.log(generateEmptySquareSequence(5));
