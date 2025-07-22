function twosumsorted(arr,target){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        const sum=arr[i]+arr[j];
        if(sum===target){
            return true;
        }else if(sum<target){
            i++;
        }else{
            j--;
        } 
        }
    return false;
}
console.log(twosumsorted([2,3,5,9],7))