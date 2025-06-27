function canBeNested(array1, array2) {
    let max = array1[0]; let min = array1[0];
    for (let i = 0; i < array1.length; i++) {
        if(max<array1[i]){
            max=array1[i];
        }
        if(min>array1[i]){
            min=array1[i];
        }
    }
     let max1 = array1[0]; let min1 = array1[0];
      for (let i = 0; i < array2.length; i++) {
        if(max1<array2[i]){
            max1=array2[i];
        }
        if(min1>array2[i]){
            min1=array2[i];
        }
    }
   if(max<max1 && min>min1){
     return true;
     
   }
   return false;
   
}
let array1=[3,4,5];
let array2=[1,7];
console.log(canBeNested(array1, array2));

function canBeNested1(arr1, arr2) {
 return Math.min(...arr1) > Math.min(...arr2)
      && Math.max(...arr1) < Math.max(...arr2);
}
console.log(canBeNested1(array1, array2));