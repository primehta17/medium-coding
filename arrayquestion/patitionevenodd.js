function partitionEvenOdd(arr) {
    let a=[],b=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
          a.push(arr[i])
        }else{
            b.push(arr[i])
        }
    }
    return [a,b];
}
console.log(partitionEvenOdd([30,10,25,35,20]));