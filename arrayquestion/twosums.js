function twosums(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[arr[i]] = i;
  }
  return [];
}
console.log(twosums([2, 3, 11, 15], 13));
console.log(twosums([10, 20, 30, 40], 50));
