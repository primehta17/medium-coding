function addToNestedArray(arr, num) {
  let newarr=[];
     for(let i=0;i<arr.length;i++){
         newarr.push(([...arr[i],num]));
     }
     return newarr;
}

console.log(addToNestedArray([[12,8],[30,40],[15,16]], 7) )