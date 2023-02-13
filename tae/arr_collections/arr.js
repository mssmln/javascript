console.log([1,3,5].find(el => el > 2));
console.log(Array.of(1,3,5).findIndex(el => el < 1));
// fill(value, start, end)
console.log(Array(1,3,5).fill(99,1));
const EQUAL4 = n => console.log(n === 4);
[4,6].forEach(EQUAL4);