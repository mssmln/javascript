// Match Single Characters Not Specified
// you could also create a set of characters that you do not want to match
// These types of character sets are called negated character sets
let quoteSample = "3 blind ^mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 
console.log(result);