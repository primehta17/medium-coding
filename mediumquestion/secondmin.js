function secondmin(arr){
    let min=Math.min(arr[0],arr[1]);
    let secondmin=Math.max(arr[0],arr[1]);
    for(let i=2;i<arr.length;i++){
        if(arr[i]<min){
            secondmin=min;
            min=arr[i];
        }else if(arr[i]<secondmin && arr[i]!==min){
            secondmin=arr[i];
        }
    }
    return secondmin;
}
console.log(secondmin([2,33,4,3,22,21]));