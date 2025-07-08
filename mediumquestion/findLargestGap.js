function findLargestGap(arr) {
    let newarr=[];let max=arr[0];
    for (let i = 0; i < arr.length-1; i++) {
        let sub = arr[i] - arr[i + 1];
       newarr.push(Math.abs(sub));
       
    }
   for(let i=0;i<newarr.length;i++){
     if(max<newarr[i]){
        max=newarr[i];
    }
   }
   return max;
   
    
}
console.log(findLargestGap([3,5,9,10,8]));