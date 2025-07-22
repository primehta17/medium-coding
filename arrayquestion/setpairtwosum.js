function setpairtwosum(arr,target){
    let seen = new Set();

   for(let x of arr){
      if(seen.has(target-x)){
         return true
      }
      seen.add(x);
   }
   return false;
}
console.log(setpairtwosum([2,3,5,7],10))