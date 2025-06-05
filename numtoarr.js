function numberToReversedArray(num) {
    num=num.toString();
    let arr=[];
    for(let i=num.length-1;i>=0;i--){
        arr.push(Number(num[i]));
    }
    return arr;
}

console.log(numberToReversedArray(97457))