function findLargestPrimeNumber(arr) {
    let max=null;
    for(let i=0;i<arr.length;i++){
        if(findprime(arr[i])){
            if(max<arr[i]){
                max=arr[i];
            }
        } 
    }
    return max;
   
}

function findprime(nums){
    if(nums<2){
        return false;
    }
    for(let i=2;i*i<nums;i++){
        if(nums%i==0){
            return false;
        }
       
    }
     return true;
}

console.log(findLargestPrimeNumber([1,5,-7,2,7]));
console.log(findLargestPrimeNumber([1, 5, 8, 12, 7]));
console.log(findLargestPrimeNumber([-1, -5, -8, -12, -7]));