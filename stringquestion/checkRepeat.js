function checkRepeat(sentence) {
    let seen = {};

    for (let i = 0; i < sentence.length; i++) {
        let abc = sentence[i];
        if (seen[abc] === undefined) {
            seen[abc] = 1;
        } else {
            seen[abc]++;
        }
    }
    for (let k in seen) {
        if (seen[k] == 1) {
            return "No repeat";
        } else {
            return "Repeat";
        }
    }
}
console.log(checkRepeat("I love coding."));
console.log(checkRepeat("Mic test. Mic test."));