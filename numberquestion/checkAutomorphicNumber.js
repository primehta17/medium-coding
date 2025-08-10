function checkAutomorphicNumber(num) {
  let square = num * num;
  let strNum = String(num);
  let strSquare = String(square);

  return strSquare.endsWith(strNum) ? "Automorphic" : "Not Automorphic";
}

// Examples
console.log(checkAutomorphicNumber(5)); // Automorphic  (25 ends with 5)
console.log(checkAutomorphicNumber(6)); // Automorphic  (36 ends with 6)
console.log(checkAutomorphicNumber(76)); // Automorphic  (5776 ends with 76)
console.log(checkAutomorphicNumber(7)); // Not Automorphic (49 does not end with 7)
