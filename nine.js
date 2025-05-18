function firstRepeat(str){
    const seen = new Set();
    for(let char of str){
       
        if(seen.has(char)){
            return char;
        }
        seen.add(char);
    }
    return null;
}

// console.log(firstRepeat("geeksofgeeks"));
// console.log(firstRepeat("abcdef"));

function setelement(str){
    let newset = new Set(str);
  return newset;

}
console.log(setelement("geeksofgeeks"))