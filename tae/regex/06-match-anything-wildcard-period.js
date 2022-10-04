// Match Anything with Wildcard Period
// The wildcard character . will match any one character
let exampleStr = "Let's have fun with regular expressions!";
let string = "The sun is out today.";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);
let result1 = unRegex.test(string);
// they have in common "un"
console.log(result);
console.log(result1);