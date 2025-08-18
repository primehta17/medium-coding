function indexShuffle(str) {
  let result = "";
  let result2 = "";
  for (let i = 0; i < str.length; i++) {
    i % 2 == 0 ? (result += str[i]) : (result2 += str[i]);
  }
  return `${result}${result2}`;
}
console.log(indexShuffle("abcdef"));
