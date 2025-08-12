function toggleBinaryString(binaryString) {
  let result = "";
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === "0") {
      result += 1;
    } else if (binaryString[i] === "1") {
      result += 0;
    }
  }
  return result;
}
console.log(toggleBinaryString("1010"));
