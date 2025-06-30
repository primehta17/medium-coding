let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let set2 = new Set(arr2);
let common = arr1.filter(value => set2.has(value));

console.log(common); // Output: [3, 4, 5]