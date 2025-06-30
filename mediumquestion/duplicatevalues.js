function duplicateval(arr){
    let seen={};
    let duplicate=[];
   for(let i=0;i<arr.length;i++){
        let abc=arr[i];
        if(seen[abc]==undefined){
            seen[abc]=1;
            
        }else{
            seen[abc]++;
            duplicate.push(abc)
        }
   }
   let newarr=[];
    for( let t in seen){
        if((seen[t])===1){
            newarr.push(t);
        };
    }
  return newarr;
}
let arr=[7,2,2,3,3,9];
// console.log(duplicateval(arr));

