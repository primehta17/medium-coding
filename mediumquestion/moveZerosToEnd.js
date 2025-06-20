function moveZerosToEnd(arr) {
    let n=[], newa=[];
    for(let i=0;i<arr.length;i++){
         if(arr[i]!==0){
              n.push(arr[i]);
        }else if(arr[i]===0){
            newa.push(arr[i]);
        }
        
    }
     return n.concat(newa);
}
console.log(moveZerosToEnd([0,7,55,3,0,6,0]));