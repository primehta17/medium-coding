function binaryToDecimal(binary) {
    let decimal =0;
    for(let i=0;i<binary.length;i++){
        decimal = decimal *2 + Number(binary[i]);
    }
    return decimal;
}
console.log(binaryToDecimal('1010'));



function decimalToBinary(num){
  if(num===0) return 0;
  let binary ='';
    while(num>0){
        binary = (num%2)+binary;
        num = Math.floor(num/2);
    }
    return binary;
}
console.log(decimalToBinary(10))