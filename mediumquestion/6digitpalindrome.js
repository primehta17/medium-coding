function sixdigitpalindrome(){
    let arr=[];
    for(let i=1;i<=9;i++){
        for(let j=0;j<=9;j++){
            for(let k=0;k<=9;k++){
                arr.push(`${i}${j}${k}${k}${j}${i}`)
            }
        }
    }
    return arr;
}
// console.log(sixdigitpalindrome());

function fivedigitpalindrome(){
    let arr=[];
    for(let i=1;i<=9;i++){
        for(let j=0;j<=9;j++){
            for(let k=0;k<=9;k++){
                arr.push(`${i}${j}${k}${j}${i}`)
            }
        }
    }
    return arr;
}
console.log(fivedigitpalindrome());

function fourdigitpalindrome(){
    let newarr=[];
   for(let i=1;i<=9;i++){
    for(let j=0;j<=9;j++){
       newarr.push(`${i}${j}${j}${i}`)
    }
   }
   return newarr;
}
// console.log(fourdigitpalindrome());