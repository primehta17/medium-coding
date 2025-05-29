let arr=[-1,-2,-3,-4,-5];
let arr2=[-10, 20, 30, -40]
function findNegativeRange(arr) {
      let min=arr[0]; let max=arr[0];
      for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
            max=arr[i];
        }
      }
      return max-min;
}
console.log(findNegativeRange(arr))
console.log(findNegativeRange(arr2))