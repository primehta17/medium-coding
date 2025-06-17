function secondmax(arr){
    let max=arr[0],secondmax=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max;
            console.log(max)
            max=arr[i];
        }   else if(arr[i]<max && arr[i]>secondmax){
            secondmax=arr[i];
        }
    }
     return secondmax;
}
let arr=[3,4,5,2,,6,9];
console.log(secondmax(arr));