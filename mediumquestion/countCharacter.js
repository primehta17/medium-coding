function countCharacterOccurrence(str, ch) {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===ch){
            count++;
        }
    }
    return count;
}
let str="hello world";
let ch="l";
console.log(countCharacterOccurrence(str, ch))