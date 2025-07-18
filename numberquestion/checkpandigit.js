function isPandigital(num) {
    if(num.length!==10){
        return false;
    }
    let set = new Set();
    for(let i=0;i<num.length;i++){
        if(num[i]<'0' || num[i]>'9'){
            return false;
        }
    set.add(num[i])
   }
   return set.size===10;
}
console.log(isPandigital("1234567890"))