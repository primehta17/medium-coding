function encodeConsonants(str) {
  let result = "";
  let consonents = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  let i = 0;
  while (str[i]) {
    if (consonents.includes(str[i])) {
      let idx = consonents.indexOf(str[i]);
      result += consonents[(idx + 1) % consonents.length];
    } else {
      result += str[i];
    }
    i++;
  }

  return result;
}
console.log(encodeConsonants("14ProgramizA123"));
console.log(encodeConsonants("javascript"));
