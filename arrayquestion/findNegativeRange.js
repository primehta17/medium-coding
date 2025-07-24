function findNegativeRange(arr) {
    let min=arr[0]; let max=arr[0];
      for(let i=0;i<arr.length;i++){
        if(min<Math.abs(arr[i])){
            min=arr[i];
        }
        if(max>Math.abs(arr[i])){
            max=arr[i];
        }
        
      }
      return max-min;
}
console.log(findNegativeRange([-10, 20, 30, -40]));
console.log(findNegativeRange([-10, -20, -30, -40]));
console.log(findNegativeRange([10, 20, 30, 40]));