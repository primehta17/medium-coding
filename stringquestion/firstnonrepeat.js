function findFirstNonRepeatedCharacter(str) {
    let seen={};
    for(let i=0;i<str.length;i++){
        let abc=str[i];
        if(seen[abc]==undefined){
           seen[abc]=1;
        }else{
            seen[abc]++
        }
    } 
let a='';
    for(let i in seen){
      if(seen[i]===1){
         a+=i;
      }
    }
     return a[0];
}
console.log(findFirstNonRepeatedCharacter('intervienw'));