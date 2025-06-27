function sepd(str) {
       let newarr=[];let s='';let d='';
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            continue;
        }
        if(str[i]==='a' || str[i]==='e'  || str[i]==='i'
              || str[i]==='o'  || str[i]==='u' ){
               s+=str[i];
            }  else{
                 d+=str[i];
            } 
    }
newarr.push(s);
newarr.push(d);
return newarr;
}
let str="Good Morning!"
console.log(sepd(str));