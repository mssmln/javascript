// Replace Loops using Recursion
// Recursive functions must have a base case when they return without calling the function again 
// (in this example, when n <= 0), 
// otherwise they can never finish executing
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  return n <= 0
    ? 0 
    : sum(arr, n - 1) + arr[n - 1]; 
}
   
console.log(sum([1], 0)); 
console.log(sum([2, 3, 4], 1));   
console.log(sum([3, 3, 4, 5], 3)); 


function sum1(arr, n) {
  for(let i = 0; i < arr.length; i++) {
    if (n <= 0) {
      return 0;
    } 
    else if (n == 1) {
      return arr[0];
    } 
    else {
      // at index 3 removes (4-3=1) => 5 so 3,3,4 will be retained
      arr.splice(n, arr.length - n);
      return arr.reduce((a, b) => a + b);
    }
  }
}
   
console.log(sum1([1], 0));
console.log(sum1([2, 3, 4], 1));
console.log(sum1([2, 3, 4, 5], 3));

/*
1 call sum(arr,2)+arr[2]
2 call sum(arr,1)+arr[1]
3 call sum(arr,0)+arr[0]
4 call return 0 since n<=0

3rd return 0+3=3,
2nd return 3+3=6,
1st return 6+4=10
*/