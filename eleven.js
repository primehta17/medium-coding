//revisit
function reverse(str){
    let nstr='';
    for(let i=str.length-1;i>=0;i--){
        nstr+=str[i];
    }
    return nstr;
}
console.log(reverse("sting reverse"));

function longestword(str){
    let newstr= str.split(" ");
    let longestword='';
    for(let i=0;i<newstr.length;i++){
       if(newstr[i]>longestword.length){
        
       }
    }
}
console.log(longestword("sting qwerty longestword"));