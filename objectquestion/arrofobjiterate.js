function arrayofobject(arr){
  let keys=[],values=[];
    for(let i of arr){
      for(let j in i){
      keys.push(j)
        values.push(i[j])
      }
    }
    return [keys,values]
}
let arr=[{1:"a",2:"b"},{1:"c",2:"d"}];
console.log(arrayofobject(arr));

arr.forEach(val=>{
  console.log(val[1])
})


const map=arr.map(u=>u[2]);
console.log(map)
