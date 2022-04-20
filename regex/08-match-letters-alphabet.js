// Match Letters of the Alphabet
// Inside a character set, you can define a range of characters to match using a hyphen character
let quoteSample = "The quick brown fox (45£jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 
// dot, spaces, numbers and special char are left out
console.log(result);