let arr =[10,45,18,9,9,10,45,10];

let set = new Set();
for(let i=0;i<arr.length;i++){
set.add(arr[i]);
}
console.log(set);

//1st method to put in array (of)
 let arrayadd=[];
for(let i of set){
    arrayadd.push(i);
}
console.log(arrayadd);
//2 nd method to put in array(spread operator)
let newArr= [...set];
console.log(newArr)


//3rd method to put in array(foreach)
let valArr=[];
set.forEach((val)=>{
   valArr.push(val)
})
console.log(valArr);


//3rd method to put in array(Array.from)
const uniqueArray = Array.from(set);
console.log(uniqueArray);

//<=======================Questions========================>//

//only unique one

let uniqueset= function (arr){
    let s=new Set();
    for(let i=0;i<arr.length;i++){
        if(s.has(arr[i])){
            s.delete(arr[i]);
        }else{
            s.add(arr[i]);
        }
    }
    return s;
}
console.log( uniqueset(arr));


//pangram

let checkIfPangram = function(sentence){
    let alpha= new Set();
   for(let i=0;i<sentence.length;i++){
    let char = sentence.charAt(i);
    // console.log(char);
        alpha.add(char);
   }
  return alpha.size===26;
}
console.log(checkIfPangram("apple"));
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); 



