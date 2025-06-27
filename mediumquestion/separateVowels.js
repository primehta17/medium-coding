function separateVowelsConsonants(str) {
       let newarr=[];let s='';let d='';
    for(let i=0;i<str.length;i++){
        if(str[i]===' '){
            continue;
        }
        if(str[i]==='a' || str[i]==='e'  || str[i]==='i'
              || str[i]==='o'  || str[i]==='u' ){
               s+=str[i];
            }  else{
                let rege=/^[,!]/;
                if(!rege.test(str[i])){
                    d+=str[i];
                }
            } 
    }
newarr.push(s);
newarr.push(d);
return newarr;
}
let str="Good Morning!"
console.log(separateVowelsConsonants(str));
console.log(separateVowelsConsonants("Hello, World!"));