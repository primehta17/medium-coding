function isSubset(arr1, arr2) {
    
     if(arr1.every(item => arr2.includes(item))){
        return "Yes";
     }else{
        return "No";
     }
}
console.log(isSubset([4,6,7], [4,6,7,5,2]));

function subsetfound(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        let item=arr1[i];let found=false;

        for(let j=0;j<arr2.length;j++){
            if(item===arr2[j]){
                 found=true;
               break;
            }
        }
        if(!found){
            return false;
        }
    }
    return true;
}
console.log(subsetfound([4,6,7], [4,6,7,5,2]));