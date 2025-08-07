function isSastryNumber(n) {
 return   Number.isInteger(Math.sqrt(`${n}${n + 1}`));
}
console.log(isSastryNumber("183"));
console.log(isSastryNumber("19"));
console.log(isSastryNumber("328"));
