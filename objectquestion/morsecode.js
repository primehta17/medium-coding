function convertToMorse(str) {
    const morseCode = {
        'A': ".-", 'B': "-...", 'C': "-.-.", 'D': "-..",
        'E': ".", 'F': "..-.", 'G': "--.", 'H': "....",
        'I': "..", 'J': ".---", 'K': "-.-", 'L': ".-..",
        'M': "--", 'N': "-.", 'O': "---", 'P': ".--.",
        'Q': "--.-", 'R': ".-.", 'S': "...", 'T': "-",
        'U': "..-", 'V': "...-", 'W': ".--", 'X': "-..-",
        'Y': "-.--", 'Z': "--.."
    };
    let s='';
    
    for(let i=0;i<str.length;i++){
        for(let j in morseCode){
            if(str[i]===j){
                s+=morseCode[j]+" ";
            }
        }
    }
    return s.trim();
}
console.log(convertToMorse("HELLO"));