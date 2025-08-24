function transformSecondLetter(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 2) {
      words[i] = word[0] + word[1].toUpperCase() + word.slice(2);
    }
  }
  return words.join(" ");
}
console.log(transformSecondLetter("this is a nice car"));
