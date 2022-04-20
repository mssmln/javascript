// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
// at least 3 h at most 6 h
// a whitespace has to follow
// no letters have to follow
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);
console.log(result);