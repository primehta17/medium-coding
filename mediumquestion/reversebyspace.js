let Input="Javascript is everything";
// Expected Output: "everything is Javascript"

// isn’t allowed to use `split()`, `reverse()`, or `join()`!

function reverseWords(str) {
    let word = '';
    let words = [];
   
    for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
    word += str[i];
    } else {
    words.push(word);
    word = '';
    }
    }
    words.push(word); // Push the last word
   
    // Now reverse manually
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) result += ' ';
    }
   
    return result;
   }
   
console.log(reverseWords(Input));


function reversewithoutextraspace(arr){
    let i=0;
    let j=arr.length-1;
    while(i!=j){ //while(i<j){
        let temp =arr[i];
        arr[i] =arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
}
let arr=[10,20,30,40,50]
console.log(reversewithoutextraspace(arr))