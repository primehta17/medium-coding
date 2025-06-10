let arr=["abc","def","abcdefe"];

function matchLastItem(arr) {
    let a='';
     for(let i=0;i<arr.length-1;i++){
      a += arr[i]

     }
     return a === arr[arr.length-1]?"Match":"No match";
}

console.log(matchLastItem(arr));