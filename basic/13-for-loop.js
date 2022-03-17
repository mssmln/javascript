// Iterate Through an Array with a For Loop
let myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let y = myArr.length - 1; y >= 0; y--) {
  total += myArr[y];
}

console.log(total);