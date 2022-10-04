// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
/*
^\s+ search for whitespaces in a row from the beginning
\s+$ search for whitespaces in a row from the end
*/
let wsRegex = /^\s+|\s+$/; 
let result = hello.replace(wsRegex, ""); 
console.log(result);
// alternative
console.log(hello.trim());