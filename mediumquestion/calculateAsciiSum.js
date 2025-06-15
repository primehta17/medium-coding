function calculateAsciiSum(str) {
    let result=0;

    for(let i=0;i<str.length;i++){
        result+=str[i].charCodeAt();
    }
    return result;
   
}
console.log(calculateAsciiSum("abc"));