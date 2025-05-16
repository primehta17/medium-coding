let arr1 = [1, 4, 5, 7, 9];
let arr2 = [2, 3, 6];
function merge(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr.push(arr2[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(merge(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7, 9]

