function flatten(arr){
    let str='';let array1=[];let p=[];
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
         array1.push(...str);
    }
    let seen={};
   for(let j=0;j<= array1.length;j++){
    let abc=array1[j];
    if(seen[abc]===undefined){
     seen[abc]=1;
     if(abc!==',' && abc!=undefined){
        p.push(abc);
     }
    
    }
   }
   return p;
}

let arr= [1,2,[3,22,4,[5,6],7,[8,9]]];
// console.log(flatten(arr));


function flattenstack(arr){
    const stack=[...arr];
   const result =[];
   while(stack.length>0){
    const v= stack.pop();
        if(Array.isArray(v)){
          
            for(let k=0;k<v.length;k++){
                //   console.log(v[k])
                stack.push(v[k]);
            }
        }else{
            result.push(v);
        }
   }
 return result.reverse();
}
console.log(flattenstack(arr));