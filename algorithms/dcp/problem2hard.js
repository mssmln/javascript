// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

/*
 2 * 3 * 4 * 5
 1 * 3 * 4 * 5
 1 * 2 * 4 * 5
 1 * 2 * 3 * 5
 1 * 2 * 3 * 4
*/

function problem2 (arr) {
    const na = [];
    arr.forEach(el => {
        let r = 1;
        arr.forEach(item => el !== item ? r *= item : '');
        na.push(r);
    })
    return na;
}

console.log(problem2([3, 2, 1]));