function sumarray(n){
    if(n==0){
        return arr[0];
    }
    return arr[n] + sumarray(n-1);
}
let arr=[1,2,3,4,5];
let len=arr.length-1;
console.log(sumarray(len));