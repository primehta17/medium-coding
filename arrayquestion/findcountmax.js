function countTallestCandles(arr) {
  let max=arr[0];    let count=0;
    for(let i=0;i<arr.length;i++){
      
        if(max<arr[i]){
            max=arr[i];
           count=1;
        }else if(max===arr[i]){
          count++
        }
     
        
    }
   
     return count;
}
console.log(countTallestCandles([5,10,3,14,2,14]));