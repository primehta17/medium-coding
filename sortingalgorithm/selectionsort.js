function selectionsort(arr){
   for(let i=0;i<arr.length-1;i++){
  let minIndex=i;
  for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[minIndex]){
        minIndex=j;
    }
  }
  if(minIndex != i){
    [arr[i],arr[minIndex]]= [arr[minIndex],arr[i]]
  }
}
   return arr;
}

console.log(selectionsort([64,55,25,12,22,11]))