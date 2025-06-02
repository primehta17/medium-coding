//reverse string using stack

function reverseStack(str){
   const stack =[];
   for(let char of str){
     stack.push(char);
   }
   console.log(stack);
   let reverse = '';
   while(stack.length>0){
    reverse += stack.pop();
   }
   return reverse;

}

console.log(reverseStack("hello javascript"))