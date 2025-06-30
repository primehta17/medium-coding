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
            newarr.push(Number(t));
        };
    }
  return newarr;
}

let arr=[7,2,2,3,3,9];
console.log(duplicateval(arr));
function set(arr){
  let set = new Set(arr);
  console.log([...set])
}
set(arr);


let arr1=[7,2,2,3,3,9];

function uniqueValue(arr){
    let seen= new Set();
    let duplicate = new Set();

    for(let val of arr){
        if(seen.has(val)){
            duplicate.add(val);
        }else{
            seen.add(val);
        }
    }
    return [...seen].filter(val=>!duplicate.has(val));
}
console.log(uniqueValue(arr1))

