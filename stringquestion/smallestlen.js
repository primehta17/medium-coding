function smallestlen(str){
    let split=str.split(" ");
    let min=split[0].length;
    for(let i=0;i<str.length;i++){
        if(str[i].length>min){
            min=str[i];
        }
    }
    return min;
    
}
console.log(smallestlen("I love Js"))