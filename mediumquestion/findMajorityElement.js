function findMajorityElement(arr) {
    let length=Math.floor(arr.length/2);let s=arr[0];let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==s ){
           count++;
        }
    }
     return count>length?s:-1;
 
}
console.log(findMajorityElement([20,20,10,10,10,20,20]));
console.log(findMajorityElement([4, 4, 4, 1, 2, 3]))