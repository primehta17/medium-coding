function isR(num) {
let reverse=0;
   while(num>0){
    reverse=reverse*10+(num%10);
    num=Math.floor(num/10);
   }
  
     return reverse;
}
let num=987654321;
console.log(isR(num));