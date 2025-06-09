
//n times hello world!

function hello(n){
    if(n===0){
        return;
    }
    console.log( "hello ")
    hello(n-1);
}

hello(5);

// (--n) way

function printhello(n){
    if(n===0){
        return;
    }
    console.log("print hello");
    printhello(--n);
}
printhello(5);

//print n numbers(desc)

function printnum(num){
    if(num===0){
        return;
    }
    console.log(num);
     printnum(num-1);//(--num)same
}
printnum(10);

console.log("<++++++asc num +++")

//print n numbers(asc)//BACKTRACKING// in stack function value is on hold
// and after return its print the value excution
function printnumasc(n){
   if(n===0){
    return ;
   }
   printnumasc(n-1);
   console.log(n);
}
printnumasc(6);

//sum all//BACKTRACKING//

console.log("+++++add++++")
function sum(n){
  if(n===0){
    return 0;
  }
  console.log(n)
  return n + sum(n-1)
}
console.log(sum(5));


console.log("******* factorial *****")

//factorial recusrsion//BACKTRACKING//

function factorial(num){
  if(num === 1){
    return num;
  }
  return num * factorial(num-1);
}
console.log(factorial(5))

console.log("******* fibonacci series *****")
// fibonacci series//BACKTRACKING//

function fibonacci(n){
    if(n==0 || n==1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log( fibonacci(7))