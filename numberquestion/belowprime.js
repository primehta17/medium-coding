
function primesBelowNum(num) {
    if (num <= 1) return false;
    const limit = Math.sqrt(num);
    for(let i=2;i<=limit;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}


function primes(n){
    let p=[];
    for(let i=2;i<=n;i++){
       
        if(primesBelowNum(i)){
          p.push(i);
        }
    }
    return p;
   
}
console.log(primes(10));