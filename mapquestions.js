let map = new Map();

map.set("1","apple");
map.set("2","banana");
map.set("3","orange");
map.set(4,"berry");
map.set('contact',[976754344, 3424563])

// console.log(map);



//Print the Frequency of Each Character 

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
console.log(newmap);


//sort the people(which is asking in answer take values)
let names = ["Mary","John","Emma"];
let heights = [180,165,170];

var sortPeople = function(names, heights) {
    
let people = new Map();
for(let i=0;i<names.length;i++){
    people.set(heights[i],names[i]);
}
heights.sort((a,b)=>b-a);

for(let i=0;i<heights.length;i++){
    names[i] = people.get(heights[i]);
}
return names;
};
console.log(sortPeople(names, heights));