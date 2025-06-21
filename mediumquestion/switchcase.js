switch(true){
    case 19<6: console.log("hello");
    break;
    case 30>4: console.log("hey");
    break;
    default:
        console.log("invalid");
}

let num=0.1+0.2;//0.300000000006
// Using num.toFixed(1) gives only 1 digit after the decimal point. 
// But as this provides value in String using Number makes it a number.
//  So now the number 0.30000000000000004 it gives 0.3. 
// which will match our case and prints Hello for us.


// switch(num){
switch (Number(num.toFixed(1))){
    case 0.3: console.log("hello");
    break;
    case 0.5: console.log("hey");
    break;
    default:
        console.log("invalid");
}