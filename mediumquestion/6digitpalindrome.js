function palindrome(num){
   for(let i=0;i<num;i++){
        for(let j=num-1;j>=0;j--){
           if(i==j){
            console.log(i)
           }
        }
   }
}
console.log(palindrome('99'))