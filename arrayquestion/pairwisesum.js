function pairwisesum(arr,sum){
   for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
         if(arr[i]+arr[j]===sum){
            return true;
         }
         return false;
      }
   }
}
console.log(pairwisesum([3,2,8,15,-8],13));