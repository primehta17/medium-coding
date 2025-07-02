function removedups(arr){
  return  arr.reduce((acc,res)=>{
    console.log("acc=>",acc)
      if(!acc.includes(res)){
        acc.push(res)
      }
       return acc;
    },[]);
   

}
let arr=[7,6,6,4,7]
// console.log(removedups(arr));

function forEachodds(arr){
  let a=[];
    arr.forEach(val=>{
      val%2!=0?a.push(val):"";
    })
    return a;
}
console.log(forEachodds(arr));

function filtermethodeven(arr){
  return arr.filter(val=>val%2==0)
}
console.log(filtermethodeven(arr));


function map(arr){
  return arr.map(val=>val<5);
}

console.log(map(arr));