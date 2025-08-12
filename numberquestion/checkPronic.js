function checkPronic(num) {
  let a = 0;
  for (let i = 1; i <= num; i++) {
    a = i * (i + 1);
    if (a == num) {
      return "Pronic";
    }
  }
  return "Not Pronic";
}
console.log(checkPronic(12));
console.log(checkPronic(15));
