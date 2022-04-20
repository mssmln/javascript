// Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters
// You can think of it being similar to the character class [^ \r\t\f\n\v]
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace).length;
console.log(result);