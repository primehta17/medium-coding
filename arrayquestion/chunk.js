const chunkArray = (arr, size) =>{
    let result=[];
    let currentchunk=[];
    for(let i=0;i<arr.length;i++){
        currentchunk.push(arr[i]);
        if(currentchunk.length === size){
            result.push(currentchunk);
            currentchunk=[];
        }
    }
    if(currentchunk.length>0){
        result.push(currentchunk)
    }
    return result;
}
console.log(chunkArray([1,2,3,4,5,6,7,9],3))