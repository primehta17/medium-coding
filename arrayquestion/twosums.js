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

function twoSumsrefactor(nums, target) {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}
console.log(twoSumsrefactor([2, 3, 11, 15], 13));
console.log(twoSumsrefactor([10, 20, 30, 40], 50));
