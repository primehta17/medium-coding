function calculateDivisors(num) {
    let count=0;
   for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
   }
   return count;
}
console.log(calculateDivisors(12)); 
console.log(calculateDivisors(66)); 