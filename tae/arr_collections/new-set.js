const set1 = new Set([1, 1, 2, 3, 4, 5]);
console.log(set1.has(1));
console.log(set1.delete(3)); // 3 is value not index
console.log(set1.add({age: 28}));
console.log(set1.size); // just counts unique values, the second 1 is omitted
console.log(set1.values()); // returns values


for (const value of set1) {
  console.log(value);
}