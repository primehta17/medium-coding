function doubleFactorial(n) {
    if(n<=1){
        return 1;
    }
    return n* doubleFactorial(n-2);
}