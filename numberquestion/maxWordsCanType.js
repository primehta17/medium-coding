function maxWordsCanType(str, brokenLetter) {
  str = str.toLowerCase();
  let split = str.split(" ");
  let letter = [];
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split[i].length; j++) {
      if (split[i][j] === brokenLetter) {
        letter.push(split[i]);
      }
    }
  }
  return Math.abs(letter.length - split.length);
}
console.log(maxWordsCanType("I am a programmer", "a"));
console.log(maxWordsCanType("hello world", "d"));
console.log(maxWordsCanType("broken keyboard challenge", "b"));
console.log(maxWordsCanType("Coding in JavaScript", "c"));
