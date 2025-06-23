function binary(arr,find){
    arr = arr.sort((a, b) => a - b);
    let first=0;
    let last=arr.length-1;
   
 
   for(let i=0;i<arr.length;i++){
     if(first>last)
        break;

    let mid=Math.floor((first+last)/2);
    if(arr[mid]==find){
        return mid;
    }else if(arr[mid]<find){
        first=mid+1;
    }else {
        last=mid-1;
    }
   }
   return -1;
}

let arr=[3,44,33,66,55,99,77];
let find=77;
console.log(binary(arr,find));