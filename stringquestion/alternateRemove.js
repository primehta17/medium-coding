function alternateRemove(str) {
    let s='';
    for(let i=0;i<str.length;i++){
        if(i%2){ 
           s+=str[i]
        }
    }
    return s;
}
console.log(alternateRemove("Hello World!"));