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

function removeduplicatearr(arr){
    let seen={};let newarr=[];
   for(let i=0;i<arr.length;i++){
    let abc=arr[i];
      if(seen[abc]==undefined){
        seen[abc]=1;
        newarr.push(abc);
      }else{
        seen[abc]++;
        
      }
   }
   return newarr;
}
console.log(removeduplicatearr([1,2,2,3]));

function twoanangram(str1,str2){

  let s1=str1.split("").sort().join('');
  let s2=str2.split("").sort().join('');
  console.log(s2,s1)
  if(s1===s2){
    return true;
  }else{
    return false;
  }
}
console.log(twoanangram("listen","silent"));

function vowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o'|| str[i]=='u' ){
            count++
        }
    }
    return count;
}
console.log(vowels("Hello World!"));

function largestnum(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
console.log(largestnum([3,32,44,35]))
