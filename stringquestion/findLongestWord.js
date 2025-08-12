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

function findLongestWordRegex(sentence) {
  let split = sentence.split(" ");
  let max = split[0].length;
  let result = "";
  for (let i = 0; i < split.length; i++) {
    let splitreplace = split[i].replace(/[^a-zA-Z]/g, "");
    if (max < splitreplace.length) {
      max = splitreplace;
      result = split[i];
    }
  }
  return result;
}

console.log(findLongestWordRegex("The weather is really nice today."));
console.log(findLongestWordRegex("This is a test sentence."));
