function findSymmetricDifference(arr1, arr2) {
    let seen={};let duplicate=[];
    let newarr=[...arr1,...arr2];
    for(let i=0;i<newarr.length;i++){
          let abc=newarr[i];
          if(seen[abc]!=undefined){
            seen[abc]=1;
          }else{
            seen[abc]++;
          
          }
    }
    for(let a in seen){
        if(!seen[a]==1){
              duplicate.push(eval(a));
        }
    }
    return duplicate;

}
console.log(findSymmetricDifference([1,2,3],[3,4]));