function palindrome(num){
  let n=num;let newnum='';
  for(let i=3;i>=0;i--){
     newnum = newnum + num[i];
  }
return newnum===n;
}
console.log(palindrome('7777'));

function pointerpalindrome(num){
   for(let i=0,j=num.length-1;i<j;i++,j--){
    if(num[i]!==num[j]){
        return false;
    }
   }
   return true;
}
console.log(pointerpalindrome('1237321'));


function twopointerapproach(num){
    let left=0;
    let right=num.length-1;
    while(left<right){
        if(num[left]!==num[right]){
            return false;
        }
    left++;
    right--;
    }
    return true;
  }
  
console.log(twopointerapproach("3223"))