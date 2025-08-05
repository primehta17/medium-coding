function factorialDigitSum(num) {
    let fact=1,sum=0;
    for(let i=1;i<=num;i++){
        fact*=i;

    }
  let f=fact.toString();
  for(let i=0;i<f.length;i++){
    sum+=Number(f[i]);
  }
    return sum;
}
console.log(factorialDigitSum(5));