function sumOfSquares(n) {
    let num=0;
    for(let i=1;i<=n;i++){
        num+=(i*i);
    }
    return num
}
console.log(sumOfSquares(5));