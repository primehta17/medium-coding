function isArraySorted(arr) {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return "Not Sorted";
        }
        
    }
    return "Sorted";
}

console.log(isArraySorted([10,20,30,40]))
console.log(isArraySorted([5, 2, 3]))
console.log(isArraySorted([10,50,30,40]))