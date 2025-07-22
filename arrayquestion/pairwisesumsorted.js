function pairwisesumsorted(arr,target){
    for(let i=0,j=arr.length-1;i<j;i++,j--){
        if(arr[i]+arr[j]===target){
            return true;
        }
        
    }
    return false;
}
console.log(pairwisesumsorted([2,3,8,15],17));