// non applicabile nel mondo reale
let obj = {};

obj[Symbol('a')] = 'a'
obj[Symbol.for('b')] = 'b'
obj['c'] = 'c'
obj.d = 'd'

for (let i in obj) {
   console.log("iterables",i)  // logs "c" and "d"
}

console.log(obj)
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
