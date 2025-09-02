function calculatePrimorial(n) {
  let num = 2;
  let count = 0;
  let result = 1;
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  while (count < n) {
    if (isPrime(num)) {
      result *= num;
      count++;
    }
    num++;
  }
  return result;
}
console.log(calculatePrimorial("4"));
console.log(calculatePrimorial("3"));
