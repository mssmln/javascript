/*
This problem was asked by Stripe.
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.
*/

function problem4 (arr) {
    // we get rid of duplicates and negative
    // eventually we sort by the lowest so the algo will find the missing more fastly
    const SET = new Set(arr.filter(el => el > -1).sort((a, b) => a - b));
    for (const val of SET) {
        if (!SET.has(val + 1)) return val + 1;
    }
}

console.log(problem4([3, 4, -1, 1, 1]));