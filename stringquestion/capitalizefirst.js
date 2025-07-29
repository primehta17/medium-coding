function captalize(str){
    let newstr='';
    for(let i=0;i<str.length;i++){
         if(i==0){

            newstr+=str[0].toUpperCase();
         }else{
            newstr+=str[i];
         }
    }
    return newstr;
}
console.log(captalize("hello world"));