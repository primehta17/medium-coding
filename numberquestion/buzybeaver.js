function busyBeaver(n) {
  if (n == 1) {
    return 1;
  }
  return busyBeaver(n - 1) * 2 + 2;
}
console.log(busyBeaver(3));
