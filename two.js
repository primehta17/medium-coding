function findLargest(num) {
    let max=num[0];
  for(let i=0;i<num.length;i++){
    if(max< num[i]){
        max=num[i]
    }
  }  
 
  return max;
}
console.log(findLargest("39452"))