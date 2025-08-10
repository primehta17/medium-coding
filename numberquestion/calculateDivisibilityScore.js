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

function countDivisorsOptimized(n) {
  let count = 0;
  const limit = Math.sqrt(n);
  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      // i is a divisor
      count++;
      // Check if the complementary divisor is different
      if (i !== n / i) {
        count++;
      }
    }
  }

  return count;
}
console.log(countDivisorsOptimized(12));
