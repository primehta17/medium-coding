function replaceAll(str, oldChar, newChar) {
    let newstr='';
    for(let i=0;i<str.length;i++){
        if(str[i]==oldChar){
           newstr+=newChar ;
        }else{
            newstr+=str[i];
        }   
    }
    return newstr;
}
console.log(replaceAll("apple",'p','b'))