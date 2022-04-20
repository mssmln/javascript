// Match All Numbers
let movieName = "2001: A Space Odyssey";
// This is equal to the character class [0-9]
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;
console.log(result);