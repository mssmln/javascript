// Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = [];
  
    for (let i = min; i < max + 1; i++) {
      range.push(i);
    }
  
    let r = 0;
    let counter = 2;
  
    for (let i = 1; i < counter; i++) {
        // it means max * i is a min's common multiple
        if (max * i % min === 0) {
            // to know if a n is divisible a whole n has to return
            let bool = range.every(el => Number.isInteger(max * i / el));
            // if bool is true we found the matching number
            if (bool) {
                r = max * i;
            } else {
                counter++;
            }
        } else {
            counter++;
        }
    }
  
    return r;
}
  
console.log(smallestCommons([1,5]));