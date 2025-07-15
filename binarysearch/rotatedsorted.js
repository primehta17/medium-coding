function rotatedsorted(arr,target){
    let first=0;
    let last= arr.length-1;
    while(first<=last){
        let mid=Math.floor((first+last)/2);
        if(arr[mid]===target){
            return mid;
        }
        if(arr[first]<=arr[mid]){
            if(arr[first]<=target && arr[mid]>=target){
                last=mid
            }else{
                first=mid+1;
            }
        }else{
           if(arr[mid]<=target && arr[last]>=target){
                first=mid+1
            }else{
                last=mid;
            }
        }
       
       
    }
    return -1;
}
console.log(rotatedsorted([4,5,6,7,0,1,2],0));
console.log(rotatedsorted([4,5,6,7,0,1,2],3));