function findLCM(num1, num2) {
    let num=[], nums=[];
    for(let i=1;i<=Math.max(num1, num2);i++){
       num.push( num1*i);
        nums.push(num2*i);
    }
    let n=[...num,...nums]
let seen={};let a=[];
for(let i=0;i<n.length;i++){
    let abc=n[i];
    if(seen[abc]==undefined){
        seen[abc]=1;
    }else if(seen[abc]==1){
        seen[abc]++;
        a.push(abc);
    }
}
return a[0];

}
console.log(findLCM(14,28));



function findLCMop(num1, num2) {
   let mul= num1*num2;
   for(let i=2;i<=mul;i++){
    if(i%num1===0 && i%num2===0){
        return i;
    }
   }
}
console.log(findLCMop(14,28));