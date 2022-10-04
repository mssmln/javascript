// Refactor Global Variables Out of Functions
/*
So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to 
the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments passed to the 
function, and not on any global object or variable.
*/

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
    return [...arr, bookName];
}

function remove(arr, bookName) {
    return arr.filter(book => book !== bookName);
}