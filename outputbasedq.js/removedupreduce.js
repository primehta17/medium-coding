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
console.log(removedups(arr));