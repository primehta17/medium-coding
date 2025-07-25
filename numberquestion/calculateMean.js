function calculateMean(num) {
    let sum=0;
    num=String(num);
   for(let i=0;i<num.length;i++){
      sum+=Number(num[i]);
      
   } 
   return sum/num.length;
}
console.log(calculateMean(12345))