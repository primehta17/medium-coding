function findMedian(arr) {
    let ans=0;
    if(arr.length%2==0){
      ans=  ( arr[Math.floor(arr.length/2-1)] +arr[Math.ceil(arr.length/2)]) /2;
    }else{
      ans=  arr[Math.floor(arr.length/2)];
    }
    return ans;
}
// console.log(findMedian([1,3,3,6,7,8,9]));
console.log(findMedian([2,3,5,10]));