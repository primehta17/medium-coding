function calculateJumps(X, Y, D) {
    let diff= Y-X;
   if(diff<=0) return 0;
   return Math.ceil(diff/D)

   
   
}
console.log(calculateJumps(10,85,30));
console.log(calculateJumps(0,1000,1));