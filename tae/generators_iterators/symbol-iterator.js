const ITERATORE = [0, 3, 4, 6][Symbol.iterator]();
console.log(ITERATORE.next());
console.log(ITERATORE.next());
console.log(ITERATORE.next());
console.log(ITERATORE.next());
console.log(ITERATORE.next());


// same example using map 
let map = new Map();
map.set('key1', 'value 1');
map.set('key2', 'value 2');
let mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

// for of loop is using Symbol.iterator under the hood
for (const [key, value] of map) { 
    console.log(`${key} and ${value}`);
}


// same example using set
let mySet = new Set();
mySet.add('uno');
mySet.add('due');
let setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());

for (const value of mySet) {
    console.log(value);
}