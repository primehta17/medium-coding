function searchinsertposition35(arr,target){
  let first=0;
  let last =arr.length-1;
  while(first<=last){
    let mid=Math.floor((first+last)/2);
    if(arr[mid]==target){
        return mid;
    }else if(arr[mid]<target){
      first=  mid+1;
    }else{
    last = mid-1;
    }
  }
return first;


}
console.log(searchinsertposition35([1,3,5,6],5))