function subArraySum(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++){
        let mul=(i+1)*(arr.length-i);
       
        sum+=arr[i]*mul;
       //also can write like this
         //let mul=arr[i]*(i+1)*(arr.length-i);
          //sum+=arr[i];
    }
    return sum;
}
console.log(subArraySum([5,4,6,3]));