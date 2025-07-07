function consecutivenum(arr){
    
   for(let i=0;i<arr.length;i++){
     if(arr[i]===arr[i+1] && arr[i]===arr[i+2]){
        return true;
     }
   }
   return false;
}
console.log(consecutivenum([10,20,20,20,50]));