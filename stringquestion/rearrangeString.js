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

// console.log(rearrangeString("programming"));

const rearrangeStringfor = (string) => {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let newstr = "";
  for (let i = 0; i < arr.length; i++) {
    newstr += arr[i];
  }
  return newstr;
};
console.log(rearrangeStringfor("programmix"));
