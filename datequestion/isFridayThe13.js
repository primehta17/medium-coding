function isFridayThe13(month, year) {
  const monthindex = month - 1;
  const date = new Date(year, monthindex, 13);
  return date.getDay() === 5;
}
console.log(isFridayThe13(9, 2024));
console.log(isFridayThe13(7, 2022));
console.log(isFridayThe13(4, 2023));
