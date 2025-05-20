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

function seenarr(arr){
    let seen={};
   for(let i=0;i<arr.length;i++){
    let abc=arr[i];
      if(seen[abc]==undefined){
        seen[abc]=1;
      }else{
        seen[abc]++;
      }
   }
   return seen;
}
console.log(seenarr([1,2,2,3]));


