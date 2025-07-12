function isSubset(arr1, arr2) {
    
     if(arr1.every(item => arr2.includes(item))){
        return "Yes";
     }else{
        return "No";
     }
}
console.log(isSubset([4,6,7], [4,6,7,5,2]));