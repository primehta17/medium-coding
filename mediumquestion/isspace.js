function checkSpaceInString(str) {
     for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            return "Space";
        }
     }
     return "No Space";
}
console.log(checkSpaceInString("Hello World!"))