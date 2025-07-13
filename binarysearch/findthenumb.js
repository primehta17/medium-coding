function findnumbybinarysearch(arr,target){
     
let first =0;
let last=arr.length-1;

 while(first<=last){
    // let mid=Math.floor((firßst+last)/2);//not good way
    let mid=Math.floor((first+(last-first)/2));
  if(arr[mid]==target){
    return mid;
  }
   else if(arr[mid]>target){
   last = mid-1;
   }
   else if(arr[mid]<target){
   first= mid+1;
   }
    
 }
return -1;
}

console.log(findnumbybinarysearch([0,3,5,7,9,12],9))