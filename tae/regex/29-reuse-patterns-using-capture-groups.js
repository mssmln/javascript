// Reuse Patterns Using Capture Groups
/*
Capture groups can be used to find repeated substrings
Capture groups are constructed by enclosing the regex pattern to be captured in parentheses
The substring matched by the group is saved to a temporary "variable"
which can be accessed within the same regex using a backslash and the number of the capture group 
Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1
*/

let repeatNum = "42 42 42";
// \1 stands for \d+ and \2 stands for \s
let reRegex = /^(\d+)(\s)\1\2\1$/; 
let result = reRegex.test(repeatNum);
console.log(result);
// match will also return capture groups being used
console.log(repeatNum.match(reRegex));


/*
Your regex should match the string 42 42 42
Your regex should match the string 100 100 100
Your regex should not match the string 42 42 42 42
Your regex should not match the string 42 42
Your regex should not match the string 101 102 103
Your regex should not match the string 1 2 3
Your regex should match the string 10 10 10
*/