// Match Whitespace
let sample = "Whitespace is important in separating words";
// You can search for whitespace using \s
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters
// You can think of it as similar to the character class [ \r\t\f\n\v]
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace);
console.log(result);