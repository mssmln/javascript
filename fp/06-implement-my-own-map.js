// Implement map on a Prototype
/*

*/

const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    const newArray = [];

    // for (let i = 0; i < this.length; i++) {
    //     newArray.push(callback(this[i]));
    // }

    // let i = newArray.length;
    // while (newArray.length < this.length) {
    //     newArray.push(callback(this[i]));
    //     i++;
    // }

    this.forEach(el => newArray.push(callback(el)));

    return newArray;
};

Array.prototype.myMap1 = function(callback, arr = [], i = 0) {
    return i < this.length
      ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
      : arr;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

const new_ss = s.myMap1(function(item) {
  return item * 3;
});

console.log(new_s);
console.log(new_ss);







