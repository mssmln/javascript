// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];
// Destructuring an array lets you choose which elements you want to assign to variables
console.log(a,b);

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index
const [c, d,,, e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, e);