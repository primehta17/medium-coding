function splitAtCapitals(str) {
  let result=[];let current='';
  for(let i=0;i<str.length;i++){
    let code=str[i].charCodeAt();
   if(code>=65 && code<=90){
     if(current!=""){
      result.push(current)
     }
      current=str[i];
    }else{
        current+=str[i];
    }
  }
  if(current !== ''){
    result.push(current);
  }
  return result;
   
}
console.log(splitAtCapitals("helloWorld" ));