function findLongestWord(sentence) {
  let split = sentence.split(" ");
  let max = split[0].length;
  let result = "";
  for (let i = 0; i < split.length; i++) {
    let splitlength = split[i].length;
    if (max < splitlength) {
      max = splitlength;
      result = split[i];
    }
  }
  return result;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
console.log(findLongestWord("Hello world! I am a programmer."));
