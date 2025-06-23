let str="reverse the string";

function reverse(str){
    let s='';
    for(let i=str.length-1;i>=0;i--){
      s+=str[i];
    }
    return s;
}
console.log(reverse(str));


function reversearr(){
  let arr=[10,20,30,40,50];
  let temp= new Array(arr.length);
  let j=0;
  for(let i=arr.length-1;i>=0;i--){
    temp[j] = arr[i];
    j++;
  }
  return temp;
}
console.log(reversearr());


