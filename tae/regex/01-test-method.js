// regex are used in programming languages to match parts of strings. You create patterns to help you do that matching
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);   
// test() method takes the regex, applies it to a string and returns true or false if your pattern finds something or not
console.log(result);