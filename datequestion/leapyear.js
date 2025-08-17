function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    return "Leap";
  } else {
    return "Noleap";
  }
}
console.log(checkLeapYear(2004));
console.log(checkLeapYear(2100));
