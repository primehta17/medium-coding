function fact(n){
  let f=1;
     for(let i=1;i<=n;i++){
         f*=i;
     }
     return f;
}


function calculateCombinations(n, k) {
     let result= (fact(k)*fact(n-k));
     return fact(n)/result;
}
console.log( calculateCombinations(5,2))