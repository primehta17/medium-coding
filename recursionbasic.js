//sum all

function sum(n){
  if(n===0){
    return 0;
  }
  console.log(n)
  return n + sum(n-1)
}
console.log(sum(5));


//n times hello world!

function hello(n){
    if(n===0){
        return;
    }
    console.log( "hello ")
    hello(n-1);
}

hello(5);