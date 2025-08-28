function sharedDigits(num1, num2) {
  let result = "";
  let set2 = new Set(num2.toString());

  for (let ch of num1.toString()) {
    if (set2.has(ch) && !result.includes(ch)) {
      result += ch;
    }
  }
  return result;
}

console.log(sharedDigits("12345", "34567")); // "345"
console.log(sharedDigits("9876", "678")); // "76"
