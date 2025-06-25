function twopointerpalindrom(str){
    let start=0;
    let end=str.length-1;
    while(start<end){
        let lower=str[start].toLowerCase();
      let high=str[end].toLowerCase();
      if(lower !==' ' && high !==' '){
        if(lower !== high){
            return false;
        }
    }
        start++;
        end--;
    }
    return true;
}
let str="raceaecar";
let str1="Race aecar";
// console.log(twopointerpalindrom(str));
console.log(twopointerpalindrom(str1));

// This two-pointer method is efficient (O(n) time, O(1)
//  space) and a standard technique seen in many 
//  palindrome-checking tutorials 