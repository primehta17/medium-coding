function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function isSophieGermainPrime(p) {
        if (isPrime(p)) {  
            const q = 2 * p + 1;
            return isPrime(q)
        }
        return false;
    
}
console.log(isSophieGermainPrime(23));
console.log(isSophieGermainPrime(12));