function checkSimilarArray(arr1, arr2) {
    console.log(arr2)
    if(arr1.sort()!=arr2.sort()){
       return "similar"
     
  } return "Not Similar"
 
}
console.log(checkSimilarArray([1,2,3], [3,2,1]))