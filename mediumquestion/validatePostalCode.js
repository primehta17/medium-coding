function validatePostalCode(postalCode) {
    return /^[1-9][0-9]{5}/.test(postalCode)? "Valid" : "Invalid";
}
let postalCode='945c54';
let postalCode2='945354';
console.log(validatePostalCode(postalCode));
console.log(validatePostalCode(postalCode2));
