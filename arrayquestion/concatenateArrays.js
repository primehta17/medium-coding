function concatenateArrays(arr1, arr2) {
    // return [...arr1,arr2].sort((a,b)=>a-b);
let newarr=[];
    for(let i=0;i<arr1.length;i++){
        newarr.push(arr1[i]);
        newarr.push(arr2[i]);
    }
    return newarr.sort((a,b)=>a-b);
}
console.log(concatenateArrays([1,2,3],[4,5,6]));


