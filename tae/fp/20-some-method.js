// Use the some Method to Check that Any Elements in an Array Meet a Criteria
/*
The some() method tests whether at least one element in the array 
passes the test implemented by the provided function. 
It returns true if, in the array, it finds an element for which 
the provided function returns true; otherwise it returns false. 
It doesn't modify the array.
*/

function checkPositive(arr) {
    return arr.some(el => el > 0);
}
  
console.log(checkPositive([1, 2, 3, -4, 5]));