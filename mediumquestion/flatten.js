function flatten(arr){
   let newarr=[];
   for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        newarr = newarr.concat(flatten(arr[i]));
      }else{
        newarr.push(arr[i]);
      }
   }
   return newarr;
}

console.log(flatten([12,21,[33,24,[45,[39]]]]));


let array=[12,21,[33,24,[45,39]]];
let narray=array.flat(2)
console.log(narray);

