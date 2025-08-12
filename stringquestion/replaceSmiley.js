function replaceSmiley(input) {
  let str = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ")") {
      str += "(";
    } else {
      str += input[i];
    }
  }
  return str;
}
console.log(replaceSmiley("Hello :) This is a test :)"));
