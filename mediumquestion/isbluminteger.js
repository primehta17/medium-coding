function validateISBN(isbn) {
   let sum = 0;
    for (let i = 1; i <= isbn.length; i++) {
        sum+= Number(isbn[i-1] * i);
       
    }
    return sum%11==0;
}
console.log(validateISBN("0306406152"))