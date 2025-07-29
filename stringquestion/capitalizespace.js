function captalizebyspace(str){
    let result='';
    let captalize= true;
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
            result+=str[i];
            captalize= true;
        }else if(captalize){
            result+=str[i].toUpperCase();
            captalize=false;
        }else{
            result+=str[i];
        }
    }
    return result;
}
console.log(captalizebyspace("Hello World!"))