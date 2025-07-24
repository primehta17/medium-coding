function checkArithmetic(arr) {
let diff= arr[1]-arr[0];
   for(let i=2;i<arr.length;i++){
        if(arr[i]-arr[i-1] !==diff){
            return "Not Arthmatic"
        }
   }
   return "Arthemetic";
    
}
console.log(checkArithmetic([1,3,5,7]) )