function arrayofobject(arr){
    for(let i=0;i<arr.length;i++){
      for(let j in arr[i]){
        console.log(j)
        console.log(arr[i][j])
      }
    }
}
arrayofobject([{1:"a",2:"b"},{3:"c",4:"d"}]);