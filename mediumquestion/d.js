function calculateMaxValue(str) {
    let sum=0;let mul=1;
    for(let i=0;i<str.length;i++){
        sum+=Number(str[i]);
        mul*=Number(str[i]);
    }
    return sum>mul?sum:mul;
}
console.log(calculateMaxValue('113'));
console.log(calculateMaxValue('631'));
