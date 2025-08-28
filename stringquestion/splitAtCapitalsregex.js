function splitAtCapitals(str) {
  return str.split(/(?=[A-Z])/);
}
console.log(splitAtCapitals("helloWorldQwerty"));
