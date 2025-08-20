function isStringRotated(str1, str2) {
  str1 = str1.split(" ");
  let newstr = "";
  let laststr = str1[0];
  for (let i = 0; i < str1.length - 1; i++) {
    newstr += str1[i + 1] + " ";
  }
  let fun = newstr + "" + laststr;
  return fun == str2;
}
console.log(isStringRotated("Coding is fun", "is fun Coding"));
console.log(isStringRotated("I love coding", "coding I love"));
