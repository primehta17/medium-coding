function isRepdigit(num) {
    num = num + "";
    let first=num[0];
    for (let i = 1; i < num.length; i++) {
     
        if (num[i] !== first) {
            return false;
        }
    } 
     return true;
}
console.log(isRepdigit('7777'));
console.log(isRepdigit("7779966"))