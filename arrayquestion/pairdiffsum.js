function sumPairDifferences(arr) {
 let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += Math.abs(arr[i] - arr[j]);
    }
  }
  return sum;
}
console.log(sumPairDifferences([20,30,10]) );
