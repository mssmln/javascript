// weakset can only contain objs
// no primitives data type
// let ws = new WeakSet([1]); // will throw an error
let ws = new WeakSet();
let obj = {a: 'a'};
ws.add(obj);
console.log(ws.has(obj));