function productExceptSelf(nums) {
  if (nums.length <= 1) return []; // handle edge case
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }
    result.push(prod);
  }
  return result;
}
console.log(productExceptSelf([5, 10, 15]));
console.log(productExceptSelf([10, 20, 30]));
console.log(productExceptSelf([5]));
