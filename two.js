
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

//4
let newarr = new Set();
newarr.add(1);
newarr.add(2);
newarr.delete(1);
newarr.clear();

console.log(newarr);


