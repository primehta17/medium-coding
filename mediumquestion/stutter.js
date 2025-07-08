function stutter(word) {

  if (word.length < 2) return word;

  const prefix = word.substring(0, 2);
  return `${prefix}... ${prefix}... ${word}`;
}

console.log(stutter("hello")); // "he... he... hello"
