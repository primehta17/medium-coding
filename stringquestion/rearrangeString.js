function rearrangeString(strin) {
  let str = strin.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - 1 - i; j++) {
      if (str[j] > str[j + 1]) {
        let temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
      }
    }
  }
  return str.join("");
}

console.log(rearrangeString("programming"));
