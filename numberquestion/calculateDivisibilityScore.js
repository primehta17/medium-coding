function calculateDivisibilityScore(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  return count;
}
console.log(calculateDivisibilityScore(24));
console.log(calculateDivisibilityScore(12));
