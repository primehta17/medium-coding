function filterStrings(arr) {
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        
        if(arr[i].indexOf('a')==-1){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(filterStrings(['apple','mongo','cherry','banana']))