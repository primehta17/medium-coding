function doubleCharacterSwap(str, c1, c2) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1) {
      newstr += c2;
    } else if (str[i] === c2) {
      newstr += c1;
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}
// console.log(doubleCharacterSwap("aabbcc", "a", "c"));

function swapDouble(str, c1, c2) {
  return str
    .split("")
    .map((char) => (char === c1 ? c2 : char === c2 ? c1 : char))
    .join("");
}
console.log(swapDouble("aabbcc", "a", "c"));
