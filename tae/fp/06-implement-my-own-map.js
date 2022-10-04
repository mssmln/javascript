// Implement map on a Prototype
/*
As you have seen from applying Array.prototype.map(), or simply map() earlier, 
the map method returns an array of the same length as the one it was called on. 
It also doesn't alter the original array, as long as its callback function doesn't.
In other words, map is a pure function, and its output depends solely on its inputs. 
Plus, it takes another function as its argument.
*/

const s = [23, 65, 98, 5];

// The this keyword gives us access to the object we are calling myMap on.
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
    ? this.myMap1(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

const new_ss = s.myMap1(item => item * 3);

console.log(new_s);
console.log(new_ss);