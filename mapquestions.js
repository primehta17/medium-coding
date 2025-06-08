let map = new Map();

map.set("1","apple");
map.set("2","banana");
map.set("3","orange");
map.set(4,"berry");
map.set('contact',[976754344, 3424563])

// console.log(map);


let arr = [10,3,5,6,10,3,5,5];
let newmap= new Map();
for(let i=0;i<arr.length;i++){
//    if(newmap.has(arr[i])){
//         newmap.set(arr[i], newmap.get(arr[i]) + 1);
//    }else{
//         newmap.set(arr[i], 1);
//    }
newmap.set(arr[i], (newmap.get(arr[i])||0)+1)
}
console.log(newmap)