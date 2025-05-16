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
   
console.log(reverseWords(Input))