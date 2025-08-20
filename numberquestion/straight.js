function checkStraightNumber(n) {
  const arr = String(num).split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) >= parseInt(arr[i + 1])) {
      return false;
    }
  }
  return true;
}
console.log(checkStraightNumber("12345"));
