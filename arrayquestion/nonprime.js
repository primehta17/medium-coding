function isPrime(num) {

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function removePrimes(arr) {
   let newarr = [];
    for (let i = 0; i < arr.length; i++) {
     
        if (arr[i] <= 1) {
            newarr.push(arr[i])
        }
        if (!isPrime(arr[i])) {
            newarr.push(arr[i])
        }
    }
    return newarr;
}

console.log(removePrimes([1,2,3,4,5,6,7]))