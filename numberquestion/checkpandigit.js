function isPandigital(num) {
   if(num.length!==10){
    return false;
   }
   let set = new Set();
   for(let ch of num){
 if(ch<'0' || ch>'9'){
    return false;
   }
  set.add(ch)
   
 
  

   }
   return set.size===10;
}
console.log(isPandigital("1234567890"))