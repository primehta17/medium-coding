function perrinSequence(n) {
    if (n === 0) return 3;
    if (n === 1) return 0;
    if (n === 2) return 2;
    
    return perrinSequence(n-2)+perrinSequence(n-3);
}
console.log(perrinSequence(6));
