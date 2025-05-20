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
   let longword='';
   for(let i of newstr){
    if(i.length>longword.length){
        longword=i;
    }
   }
   return longword;
}
console.log(longestword("sting qwerty longestword"));

function palindrom(str){
    let newstr="";
   for(let i=str.length-1;i>=0;i--){
    newstr+=str[i];
   }
   return newstr==str;
}
console.log(palindrom("malayalam"));