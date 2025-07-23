function singleOccurrence(arr) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let abc = arr[i];
        if (seen[abc] == undefined) {
           
        seen[abc]=1;

        }else if(seen[abc] ==1){
           seen[abc]++;
          
        }
    }
   for(let val in seen){
    if((seen[val])===1){
        return +val;
    }
   }
    

}
console.log(singleOccurrence([2,21,3,21,2]))