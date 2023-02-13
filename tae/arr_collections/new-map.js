// A Map's keys can be any value (including functions, objects, or any primitive)
// The number of items in an Object must be determined manually, here .size can help out 
// A Map is an iterable, so it can be directly iterated
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
map1.set('a', 97);
console.log(map1.get('a'));
map1.delete('b');
console.log(map1.size);


function logMapElements(value, key) {
    console.log(`m[${key}] = ${value}`);
}
  
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);