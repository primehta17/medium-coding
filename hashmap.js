// Map in JavaScript, and how does it differ from a plain object?
// A Map is a collection of key-value pairs 
// where keys can be of any data type. 
// Unlike plain objects, which coerce keys
// to strings, Map maintains the original data
// type of keys and preserves insertion order.


const map = new Map();
map.set('1','String key');
map.set(1, 'number key');
console.log(map.get('1'));
console.log(map.get(1));


// Use the has() method to determine if a key exists in the Map.

const maphas = new Map([['a',1]]);
console.log(maphas.has('a'));
console.log(maphas.has('b'));

// add a key that already exists in the Map, the new value will 
// overwrite the existing value associated with that key.

const mapduplicate = new Map();
mapduplicate.set('a',1);
mapduplicate.set('a',2);
console.log(mapduplicate.get('a'));


// Use the delete() method to remove a specific key-value pair from the Map.

const mapdelete = new Map();

mapdelete.set('a','qwerty');
mapdelete.set('b',2);

mapdelete.delete('a');

console.log(mapdelete.has('a'));

// iterate over a Map

const mapiterate = new Map([['a',1],['b',2]]);
console.log("+++++++++++ new map", mapiterate);

//using the default iterator of Map
for(const pair of mapiterate){
    
    const key = pair[0];
    const value = pair[1];

    console.log(`${key}: ${value}`);
    console.log("+++++++++++++++ pair", pair);
}