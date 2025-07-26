function sumOfSquares(n) {
    if(n<=0){
      return 0;
    }
    return n*n + sumOfSquares(n-1);
}
console.log(sumOfSquares(5));

let sum=0;
for(let i=5;i>=1;i--){
   sum+=(i*i);
}
console.log(sum)