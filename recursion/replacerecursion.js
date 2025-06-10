
function replaced(str){
    let newstr='';
    for(let i=0;i<str.length;i++){
       if(str[i]==='_'){
            newstr +=" ";
       }else{
            newstr +=str[i];
       }
    }
    return newstr;
}
console.log(replaced("qwerty_qwdfrt"));

function reprecursion(str){
    if(str.length===0){
        return
    }

    return str, reprecursion(str.length-1)
}
console.log(reprecursion("qwerty_qwdfrt"));