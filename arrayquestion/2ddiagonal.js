function diagonalarray(arr){
    let diagonal=[],antidiagonal=[];
    for(let i=0;i<arr.length;i++){
        diagonal.push(arr[i][i]);
        antidiagonal.push(arr[i][arr.length-1-i])

    }
    return [diagonal,antidiagonal];
}
console.log(diagonalarray([[1,2,3],[4,5,6],[7,8,9]]))