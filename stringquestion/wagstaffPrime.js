function formsWagstaffPrime(p) {
  // Wagstaff number
  let a = (Math.pow(2, p) + 1) / 3;

  if (a % 1 !== 0) return false; // must be integer

  if (a < 2) return false;

  for (let i = 2; i * i <= a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(formsWagstaffPrime(3)); // true → (2^3+1)/3 = 3 (prime)
console.log(formsWagstaffPrime(5)); // true → (2^5+1)/3 = 11 (prime)
console.log(formsWagstaffPrime(7)); // true → (2^7+1)/3 = 43 (prime)
console.log(formsWagstaffPrime(11)); // true → (2^11+1)/3 = 683 (prime)
console.log(formsWagstaffPrime(2)); // false → (2^2+1)/3 = 5/3 not integer
