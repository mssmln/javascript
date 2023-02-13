const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// con {} non modifichiamo target 
const returnedTarget = Object.assign({}, target, source);
console.log(target);
console.log(returnedTarget);