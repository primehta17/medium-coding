function vowels(str){
   let arr=['a','e','i','o','u'];
   let count=0;
   for(let i=0;i<str.length;i++){
    let a=str[i];
    for(let j=0;j<str.length;j++){
       if(a==arr[j]){
        count++;
        break;
       }
    }
   }
   return count;
}
console.log(vowels("Hello javascript"));