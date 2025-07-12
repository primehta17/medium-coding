function findFirstAndLast(arr, num) {
    let first=0;let second=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            
           if(first === 0){
            first =i;
           }
           last=i;
        }
     
    }
    // return count
    return [first,last];
}
console.log(findFirstAndLast([5,13,14,13,14,15],13));
console.log(findFirstAndLast([1,2,3],3));