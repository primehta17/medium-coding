function subArraySum(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        let mul=arr[i]*(i+1)*(arr.length-i);
        sum+=mul;
    }
    return sum;
}
console.log(subArraySum([5,4,6,3]));