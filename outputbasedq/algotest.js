// 1. Write a Program to print the frequency of elements in an array?
//    i/p: let arr=[1, 1, 2, 3, 3, 4]
//    o/p: { '1': 2, '2': 1, '3': 2, '4': 1 }

function frequency(arr){
    let seen={};
    for(let i=0;i<arr.length;i++){
        let abc=arr[i];
        if(seen[abc]===undefined){
            seen[abc]=1;
        }else{
            seen[abc]++;
        }
    }
    return seen;
}
let arr=[1, 1, 2, 3, 3, 4];
console.log(frequency(arr));
 
 
// 2. what will be print in console?
 
   let x = [1, 2, 3];
   let y = [1, 2, 3];
   let z = y;
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
 
// 3.Remove Duplicates from an Array in JavaScript?
//   i/p:[5, 2, 5, 6, 6, 7]
//   o/p : [5,2,6,7]

function duplicate(arr){
    let seen={};let duplicate=[];
    for(let i=0;i<arr.length;i++){
        let abc=arr[i];
        if(seen[abc]===undefined){
            seen[abc]=1;
            duplicate.push(abc);
        }else{
            seen[abc]++;
        }
    }
    return duplicate;
}
let arrdup=[5, 2, 5, 6, 6, 7];
console.log(duplicate(arrdup))
 
// 4.Count Vowels in a String in JavaScript
//   str="hello Algoshack"

function countVowels(str){
    let count=0;
    let lower=str.toLowerCase();
    for(let i=0;i<lower.length;i++){
        if(lower[i]=='a' || lower[i]=='e' || lower[i]=='i' || lower[i]=='o'|| lower[i]=='u'){
            count++;
        }
    }
    return count;
}
 let vowels="hello Algoshack";
console.log(countVowels(vowels));

 
// 5.Write a Program to count the occurrences of a character in a string in JavaScript?
//   let str="AlgoShack" 
//   find for char A number of occurrence.

function strcount(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='A'){
            count++;
        }
    }
    return count;
}
 let str="AlgoShack";
console.log(strcount(str));
 
// 6.Write a Program to find the minimum value in an array in JavaScript?
//   findMin([5, 10, -1, 8])

function findMin(arr){
    let min=arr[0];
    // console.log(min);
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
console.log(findMin([5, 10, -1, 8]))
 
// 7.Implement a debounce function.
 
// 8.Write a function to reverse a string without using built-in methods.

function reverse(str){
    let newstr='';
    for(let i=str.length-1;i>=0;i--){
        newstr+=str[i];
    }
    return newstr;
}
console.log(reverse("Hello!"))
 
// 9.Group array of objects by key
//   Input: groupBy([{type: 'fruit'}, {type: 'veg'}, {type: 'fruit'}], 'type')  
//   Output: { fruit: [{...}, {...}], veg: [{...}] }

function groupBy(arr, key) {
  let result = {};

  for (let obj of arr) {
    let groupKey = obj[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(obj);
  }

  return result;
}

console.log(groupBy([{type: 'fruit'}, {type: 'veg'}, {type: 'fruit'}], 'type'));

// {
//   fruit: [
//     { type: 'fruit', name: 'apple' },
//     { type: 'fruit', name: 'banana' }
//   ],
//   veg: [
//     { type: 'veg', name: 'carrot' }
//   ]
// }

// 10.What is the output of the following code?
  for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//answer is 3 ,3 ,3 in 1 second