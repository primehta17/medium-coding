function rotatethematrix90degree(arr) {
   let newarr=[];
   for(let i=0;i<arr.length;i++){
      let row=[];
      for(let j=arr.length-1;j>=0;j--){
        row.push(arr[j][i]);
      }
      newarr.push(row);
   }
   return newarr;
}

let arr = [
  [10, 10, 10],
  [20, 20, 20],
  [30, 30, 30]
];

console.log(rotatethematrix90degree(arr));
