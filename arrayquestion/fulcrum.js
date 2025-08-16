function findFulcrum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let rightsum = 0;
    let leftsum = 0;
    for (let j = 0; j < i; j++) {
      leftsum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      rightsum += arr[j];
    }
    if (leftsum === rightsum) {
      return arr[i];
    }
  }
  return -1;
}
console.log(findFulcrum([3, 1, 5, 2, 4, 6, -1]));
