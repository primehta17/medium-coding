function formatWithCommas(num) {
    let formatted='';
    let count=0;
    for(let i=num.length-1;i>=0;i--){
       formatted=num[i]+formatted;
       count++;
       if(count%3==0 && i>0){
        formatted=","+formatted;
       }
    }
    return formatted;
}

console.log(formatWithCommas('1234567'));

console.log(formatWithCommas('50000'));