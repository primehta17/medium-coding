function maximizeProblem(arr) {
    let newarr=0;
    for(let i=0;i<arr.length;i++){
        let a= arr[i]*i;
        newarr+=a;
    }
    return newarr;
}
console.log(maximizeProblem([10,15,20,25]));