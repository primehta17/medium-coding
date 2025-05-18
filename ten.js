function objfirstelement(obj){
   return Object.keys(obj)[0];
}
console.log(objfirstelement({"one": [1,2,3], "two": [4,5,6]}))