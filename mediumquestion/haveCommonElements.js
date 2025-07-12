function haveCommonElements(arr1, arr2) {
    
   return ( arr1.some(item => arr2.includes(item)))?"Yes":"No";
}
console.log(haveCommonElements([4,6,7], [4,6,7,5,2]));

function haveCommon(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
       

        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                return true;
            }
        }
      
    }
    return false;
}
console.log(haveCommon(['a','b','c'], ['c','d','e']));