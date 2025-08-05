function rowSum(matrix) {
  let newarr=[];
    for(let i=0;i<matrix.length;i++){
      let sum=0;
      for(let j=0;j<matrix[i].length;j++){
        sum+=matrix[i][j];
      }
      newarr.push(sum);
    }
    return newarr;
}
let matrix=[[3,2,3],[4,5,6],[7,3,9]];
console.log( rowSum(matrix))