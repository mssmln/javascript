// Check for All or None
let favWord = "favorite";
// u may or may not exist
// ? checks for zero or one of the preceding element
let favRegex = /favou?rite/; 
let result = favRegex.test(favWord);
console.log(result);