function areEqual(obj1, obj2) {
    if(obj1===obj2){
        return true;
    }
    if(obj1.length!==obj2.length){
        return false;
    }
    if(Array.isArray(obj1) !== Array.isArray(obj2)){
        return false;
    }
    for(let i=0;i<obj1.length;i++){
        if(obj1[i]!==obj2[i]){
            return false;
        }
    }
    
   
  return  true;
  
}
console.log(areEqual([1, 2, 3],[1, 2, 3]));
console.log(areEqual([3, 2, 1],[1, 2, 3]));
console.log(areEqual("abc","abc"));