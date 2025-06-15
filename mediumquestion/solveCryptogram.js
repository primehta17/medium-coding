function solveCryptogram(cipher, map) {
     let result='';
     for(let i=0;i<cipher.length;i++){
        let ch=cipher[i];
        result+=map.hasOwnProperty(ch)? map[ch] :ch;
           
     }
     return result;
}

console.log(solveCryptogram('abc',{'a':'d','b':'i','c':'o'}));