function iteratedSquareRoot(n) {
  let count = 0;
  while (n >= 2) {
    n = Math.sqrt(n);
    count++;
  }
  return count;
}
console.log(iteratedSquareRoot("256"));
console.log(iteratedSquareRoot("81"));
