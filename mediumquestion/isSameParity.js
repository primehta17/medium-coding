function isSameParity(arr) {
    if(arr.length==0){
        return true;
    }
    for(let i=1;i<arr.length;i++){
        const firstParity = arr[0] % 2;
        if(arr[i]%2!=firstParity){
            return false;
        } 
        
    }
    return true;
}
console.log(isSameParity([3,4,6]))