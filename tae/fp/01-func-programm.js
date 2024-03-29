// Learn About Functional Programming
/*
Functional programming is a style of programming where solutions are simple, 
isolated functions, without any side effects outside of the function scope: 
INPUT -> PROCESS -> OUTPUT

Functional programming is about:
Isolated functions - there is no dependence on the state of the program, 
which includes global variables that are subject to change
Pure functions - the same input always gives the same output
Functions with limited side effects - any changes, or mutations, 
to the state of the program outside the function are carefully controlled
*/


/*
functional terminology:

Callbacks are the functions that are slipped or passed into another function 
to decide the invocation of that function. 
You may have seen them passed to other methods, for example in filter, 
the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or 
returned from another function just like any other normal value, are called 
first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a 
return value are called higher order functions.

When functions are passed in to or returned from another function, then those 
functions which were passed in or returned can be called a lambda.
*/

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);