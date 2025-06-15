function calculateAsciiSum(str) {
    let result=0;

    for(let i=0;i<str.length;i++){
        result+=str[i].charCodeAt();
    }
    return result;
   
}
console.log(calculateAsciiSum("abc"));


// 🔤 1. charCodeAt(index)
// Returns the ASCII (Unicode) value of the character at the given index.

let str = "A";
console.log(str.charCodeAt(0)); // 65 (ASCII code for 'A')

// 🔡 2. fromCharCode(code)
// Converts ASCII code to character (static method of String).
 console.log(String.fromCharCode(66)); // 'B'

//  🧪 3. charAt(index)
// Returns the character at the specified index.

let str1 = "Hello";
console.log(str1.charAt(1)); // 'e'

// 📏 4. length
// Gives the number of characters in the string.

let str3 = "ABC";
console.log(str3.length); // 3


// 🪓 5. slice(start, end)
// Extracts a portion of the string.

let str4 = "JavaScript";
console.log(str4.slice(0, 4)); // 'Java'


// 🪪 6. substring(start, end)
// Similar to slice, but doesn't accept negative indices.

let str5 = "JavaScript";
console.log(str5.substring(1, 4)); // 'elc'


// 🔍 7. indexOf(substr)
// Finds the index of the first occurrence of the substring.

let str6 = "hello world";
console.log(str6.indexOf('o')); // 4


// 🧼 8. trim()
// Removes leading and trailing spaces.

let str7 = "  hi there  ";
console.log(str7.trim()); // 'hi there'

// 🔄 9. toLowerCase() / toUpperCase()
// Converts all characters to lowercase or uppercase.


console.log("abc".toUpperCase()); // 'ABC'
console.log("Abc".toLowerCase()); // 'ABC'

// 🔁 10. replace(old, new)
// Replaces the first match of old with new.

let str9 = "hello";
console.log(str9.replace("h", "j")); // 'jello'