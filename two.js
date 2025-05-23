
//1
// convert a Set to an Array
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

//5

let newSet= new Set([1,2,3,4]);
console.log(newSet.has(2));
console.log(newSet.has(9));

//6
const setA = new Set([1,2,3]);
const setB = new Set([3,4,5]);

//Union
const union = new Set([...setA,...setB]);
console.log(union);
//Intersection
const intersection = new Set([...setA].filter(x=>setB.has(x)));
console.log(intersection);


//7
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [... new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5];

//8 size
const numb = new Set([1, 2, 2, 3, 4, 4, 5]);
let size=numb.size;
console.log(size);

//9
const myset = new Set();
myset.add({a:"abc"});
myset.add({b:"sss"});
console.log(myset.size);

//10 iteraction
let setSet = new Set(['a', 'b', 'c']);
//using for...of
for(const value of setSet){
  console.log(value);
}

//using forEach
setSet.forEach(value=>{
  console.log(value);
});
