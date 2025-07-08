function getLastNElements(arr, n) {
    let newarr=[];
    for(let i=arr.length-n;i<arr.length;i++){

      newarr.push(arr[i]);
    }
    return newarr;
}
console.log(getLastNElements([1,2,3,4,5], 2));