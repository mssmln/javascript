// Avoid Mutations and Side Effects Using Functional Programming
/*
One of the core principles of functional programming is to not change things. 
Changes lead to bugs. It's easier to prevent bugs knowing that your functions 
don't change anything, including the function arguments or any global variable.

Recall that in functional programming, changing or altering things is called 
mutation, and the outcome is called a side effect. A function, ideally, 
should be a pure function, meaning that it does not cause any side effects.
*/

let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

// incrementer() // 5
// fixedValue // 4


// Pass Arguments to Avoid External Dependence in a Function
/*
We didn't alter the global variable value, but the function incrementer would not work without the global 
variable fixedValue being there.
Another principle of functional programming is to always declare your dependencies explicitly. 
This means if a function depends on a variable or object being present, then pass that variable or object 
directly into the function as an argument.
There are several good consequences from this principle. The function is easier to test, 
you know exactly what input it takes, and it won't depend on anything else in your program.
This can give you more confidence when you alter, remove, or add new code. 
You would know what you can or cannot change and you can see where the potential traps are.
Finally, the function would always produce the same output for the same set of inputs, 
no matter what part of the code executes it.
*/

function incrementer(val) {
  return val + 1;
}