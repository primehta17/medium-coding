function findCommonElements(arr1, arr2) {
    let newarr=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            newarr.push(arr1[i])
        }
    }
    }
    return newarr;
}
let arr1=[20,10,30];
let arr2=[10,40,20];
console.log(findCommonElements(arr1,arr2));