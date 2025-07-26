function separateVowelsConsonants(str) {
    let vowels=['a','e','i','o','u'];
    let newarr='';let n='';
    for(let i=0;i<str.length;i++){  
        if(str[i]=='a' ||  str[i]=='e' || str[i]== "i" || str[i]=='o' || str[i]=='u'){
            newarr+=str[i];
        }else{
            n+=str[i];
        }
       
      
    }
    return [newarr,n];
}
console.log(separateVowelsConsonants("GoodMorning"))