function palindromeWithSpaces(s) {
  let filtered = '';
  const lower = s.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] !== ' ') {
      filtered += lower[i];
    }
  }

  // Reverse filtered
  let rev = '';
  for (let i = filtered.length - 1; i >= 0; i--) {
    rev += filtered[i];
  }

  return rev === filtered;
}

console.log(palindromeWithSpaces("I mam i"));  // → true
