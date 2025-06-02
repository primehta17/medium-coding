// add a key that already exists in the Map, the new value will 
// overwrite the existing value associated with that key.


const map = new Map();
map.set('a',1);
map.set('a',2);
console.log(map.get('a'));