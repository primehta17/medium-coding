function payableamount(amount){
let discount=0;

    if(amount>9000){
        discount=20;
    }else if(amount<=9001 && amount>=7000){
        discount=10;
    }else if(amount<=7001 && amount>=5000){
        discount=5;
    }else{
        discount=0;
    }
 return amount-Math.floor(amount*(discount/100));
}
let amount = 9000;
console.log(payableamount(amount));