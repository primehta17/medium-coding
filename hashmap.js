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