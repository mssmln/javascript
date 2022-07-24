// Drop it
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until 
the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/

function dropElements(arr, func, i = 0) {
    const index = arr.indexOf(arr.find(el => func(el)));
    return index === -1 ? [] : arr.splice(index);

    // 1 fcc solution
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;

    // 2 fcc solution
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);

    // 3 fcc solution
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;

    // 4 fcc solution
    return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}
  
console.log(dropElements([1, 2, 3], n => n < 3));