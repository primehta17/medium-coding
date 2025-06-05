function countUniqueDigits(num) {
   num=num+"";
    let seen={};let count=0;
    for(let i=0;i<num.length;i++){
        let abc=num[i];
       if(seen[abc]===undefined){
           seen[abc]=1;
           count++;
       }else{
        seen[abc]++;
       }
    }
    return count;
    
}
console.log(countUniqueDigits(112345))