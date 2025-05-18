
function setelement(str){
  let newset = new Set(str);
  
return [...newset];

}
console.log(setelement("geeksofgeeks"));

function uniquevalue(str){
  let newset=new Set(str)
  const uniqueCharsArray = Array.from(newset);
  return uniqueCharsArray;
}
console.log(uniquevalue("geeksofgeeks"));