function checkInRange(num, lowerLimit, upperLimit) {
    for(i=lowerLimit;i<=upperLimit;i++){
      console.log(i)
        if(num==i){
          return "Yes";
        }
    }
    return "No";
}
console.log(checkInRange(10,1,10));//Yes
console.log(checkInRange(11,1,10));//No