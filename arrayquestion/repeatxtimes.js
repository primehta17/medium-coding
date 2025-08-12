function xOfAKind(arr, x) {
  let seen = {};
  for (let i of arr) {
    let abc = i;
    if (seen[abc] == undefined) {
      seen[abc] = 1;
    } else {
      seen[abc]++;
    }
  }
  for (let j in seen) {
    if (seen[j] === x) {
      return true;
    }
  }
  return false;
}
console.log(xOfAKind([12, 13, 22, 13, 13], 3));
