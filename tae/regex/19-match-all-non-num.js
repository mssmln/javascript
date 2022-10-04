// Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
// This is equal to the character class [^0-9]
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;
console.log(result);