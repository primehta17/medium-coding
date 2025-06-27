function longestConsecutiveZeros(str) {
    let current=0;let max=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='0'){
          current++;
        }else{
           if(max<current){
            max=current;
            current=0
           }
        } 
    }
    if(max<current){
        max=current;
    }
    return max;
}
console.log(longestConsecutiveZeros("1010010001"))