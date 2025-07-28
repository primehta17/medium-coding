function concatenateArrays(arr1, arr2) {
  
let newarr=[];
    for(let i=0;i<arr1.length;i++){
        newarr.push(arr1[i]);
        newarr.push(arr2[i]);
    }
    return newarr.sort((a,b)=>a-b);
}
console.log(concatenateArrays([1,2,3],[4,5,6]));

function mergeSorted(arr1,arr2){
    const result=[];
    let i=0,j=0;
    while(i< arr1.length && j< arr2.length){
        if(arr1[i]<= arr2[j]){
            result.push(arr1[i++]);
        }else{
            result.push(arr2[j++]);
        }
    }
    while(i<arr1.length) result.push(arr1[i++]);
    while(j<arr2.length) result.push(arr2[j++]);

    return result;
}
console.log(mergeSorted([7,9,10],[11,12,13]))


