function countLeapYears(year1, year2) {
    let count=0;
    for(let i=year1;i<=year2;i++){
        if(i%4==0 && i%100 !==0 || i% 400 ===0){
           count++;
        }
    }
    return count;
}
 console.log(countLeapYears(2000,2020));
console.log(countLeapYears(1900,2000));