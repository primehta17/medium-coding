function checkSimilarArray(arr1, arr2) {
     for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
          return "Similar";
        }
      }
     }
     return "Not Similar";
}
console.log(checkSimilarArray([1,2,3],[3,2,1,9]));


function setsimilararray(arr1,arr2){
    let set = new Set(arr1);

  return  arr2.some(item=>set.has(item))? "Similar" : "Not Similar";

}
console.log(setsimilararray([1,2,3],[3,2,1,9]));
console.log(setsimilararray([1,2,3],[4,5,9]));