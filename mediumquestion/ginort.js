function ginsort(strs){
   str= strs.split('').sort().join('');
    let s='',b='',c='',v=''; let t='';
    for(let i=0;i<str.length;i++){
        
         if(str[i].charAt()>='a' && str[i].charAt()<='z'){
         t= t+str[i];
         }else if(str[i].charAt()>='A' && str[i].charAt()<='Z'){
             b+=str[i];
         }else if(str[i]%2!==0){
             c+=str[i];
         }else if(str[i]%2==0){
             v+=str[i];
         };
          
    }
   return t+b+c+v;
   
}
console.log(ginsort('Sorting4321'));

function ginortSOrder(s) {
  const lower = [], upper = [], odd = [], even = [];

  for (const ch of s) {
    if (ch >= 'a' && ch <= 'z') lower.push(ch);
    else if (ch >= 'A' && ch <= 'Z') upper.push(ch);
    else if (ch >= '0' && ch <= '9') {
      if (parseInt(ch) % 2) odd.push(ch);
      else even.push(ch);
    }
  }

  return (
    lower.sort().join('') +
    upper.sort().join('') +
    odd.sort().join('') +
    even.sort().join('')
  );
}

console.log(ginortSOrder('Sorting4321'));
