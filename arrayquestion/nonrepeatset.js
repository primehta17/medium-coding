function nonrepeatsetsort(arr) {
  arr = arr.sort();
  let a = [];
  let result = new Set(arr);
  for (let i of result) {
    a.push(i);
  }
  return a;
}
console.log(nonrepeatsetsort([2, 4, 1, 2, 4, 6]));
