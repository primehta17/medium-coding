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

