function findPairWithDifferenceTwo(arr) {
    for(let i=0;i<arr.length;i++){
      if(Math.abs(arr[i]-arr[i+1])==2){
        return "Found";
      }
    }
     return "Not found";
}
console.log(findPairWithDifferenceTwo([1,5,3,4]));
console.log(findPairWithDifferenceTwo([1,2,4,7]));
console.log(findPairWithDifferenceTwo([10,12]));