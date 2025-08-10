function calculateDivisibilityScore(num) {
  let count = 1;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  return count;
}
console.log(calculateDivisibilityScore(24));
console.log(calculateDivisibilityScore(12));
