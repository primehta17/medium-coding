function repeatVowels(str) {
  let result = "";
  let regex = /[AEIOUaeiou]/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      result += str[i] + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(repeatVowels("Hello Aaron"));
