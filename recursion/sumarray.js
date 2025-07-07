function sumarray(n){
   if(n==0){
    return arr[0];
   }
   return arr[n] + sumarray(n-1);
}
let arr=[21,12,13,14,15];
let len=arr.length-1;
console.log(sumarray(len));

