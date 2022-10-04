// Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
// This shortcut is the same as [^A-Za-z0-9_]
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);