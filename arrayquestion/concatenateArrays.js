function concatenateArrays(arr1, arr2) {
    return [...arr1,arr2].sort((a,b)=>a-b);
}
console.log(concatenateArrays([1,2,3],[4,5,6]))