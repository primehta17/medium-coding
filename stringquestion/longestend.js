function findLongestCommonEnding(str1, str2) {
  let result = "";
  let a = str1.length - 1;
  let b = str2.length - 1;
  while (a >= 0 && b >= 0 && str1[a] === str2[b]) {
    result = str1[a] + result;
    a--;
    b--;
  }
  return result;
}
console.log(findLongestCommonEnding("badwriting", "goodwriting"));
