function doubleFactorial(n) {
    if(n<=1){
        return 1;
    }
    return n* doubleFactorial(n-2);
}
console.log(doubleFactorial(7));// n!! = 1 * 3 * 5 * 7;
console.log(doubleFactorial(5));

let m=7;

let double=1;
for(let i=m;i>=0;i-=2){
    double*=i;
}
console.log(double)