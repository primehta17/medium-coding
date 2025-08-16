function largestSwap(num) {
  num = num.toString();
  let n = "";
  for (let i = num.length - 1; i >= 0; i--) {
    n += num[i];
  }
  return num > n;
}
console.log(largestSwap(27));
