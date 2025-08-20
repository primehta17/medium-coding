function findNextLetter(ch) {
  let a = ch.charCodeAt() + 1;

  if (a > 97 && a < 123) {
    return String.fromCodePoint(a);
  } else {
    return ch;
  }
}
console.log(findNextLetter("z"));
