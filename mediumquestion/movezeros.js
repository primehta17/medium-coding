function movezeros(arr){
    let i=0;
    let j=0;

    while(i<arr.length){
     if(arr[i]==1){
        let temp=arr[i];
        arr[i] = arr[j];
        arr[j]=temp;
         j++;
     } 
      i++;
        
    }
   
    return arr;
}
let arr=[1,0,1,0,0,1,0,0,1]
console.log(movezeros(arr));