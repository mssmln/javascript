// Implement the filter Method on a Prototype
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    const newArray = [];

    // for (let i = 0; i < this.length; i++) {
    //     if (callback(this[i])) {
    //         newArray.push(this[i]);
    //     }
    // }

    // this.forEach(i => {
    //     if (callback(i)) {
    //         newArray.push(i);
    //     }
    // })

    let i = 0;
    while (i < this.length) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
        i++
    }
  
    return newArray;
};


Array.prototype.myFilter1 = function(callback, arr = [], i = 0) {
    return i < this.length 
      ? this.myFilter(callback, callback(this[i]) ? arr.concat(this[i]) : arr, i + 1)
      : arr;
};

const new_s = s.myFilter(item => item % 2 === 1);
const new_ss = s.myFilter1(item => item % 2 === 1);

console.log(new_s);
console.log(new_ss);