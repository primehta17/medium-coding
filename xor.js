function xor(arr){
    let result= 0;
 for(let i=0;i<arr.length;i++){
  result ^= arr[i];
 }
 return result;
}
console.log(xor([2,4,8,6]))
//8