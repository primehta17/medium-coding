
//1

function setelement(str){
  let newset = new Set(str);
  
return [...newset];

}
console.log(setelement("geeksofgeeks"));


//2
function uniquevalue(str){
  let newset=new Set(str)
  const uniqueCharsArray = Array.from(newset);
  return uniqueCharsArray;
}
console.log(uniquevalue("geeksofgeeks"));

//3
let arr = new Set([1,2,2,3]);
console.log(arr);




