// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2 = ...arr1 would not work because it is not in-place
let arr2 = [...arr1]; 
console.log(arr2);