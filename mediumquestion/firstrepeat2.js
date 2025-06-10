function firstrepeat(str){
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                return str[i];
            }
        }
    }
    return null;
}
console.log(firstrepeat("gevksof0k"));