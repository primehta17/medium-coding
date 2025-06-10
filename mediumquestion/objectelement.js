function objfirstelementkey(obj){
   return Object.keys(obj)[0];
}
console.log(objfirstelementkey({"one": [1,2,3], "two": [4,5,6]}))


function objfirstelementvalue(obj){
    return Object.values(obj)[0];
 }
 console.log(objfirstelementvalue({"one": [1,2,3], "two": [4,5,6]}))