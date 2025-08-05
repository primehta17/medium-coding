function perfectIteratedSquares(n) {
   let result=[];
   while(Number.isInteger(Math.sqrt(n))){
    n=Math.sqrt(n)
    result.push(n)
   }
   return result;
}
console.log(perfectIteratedSquares(6561));