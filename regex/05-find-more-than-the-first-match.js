// Find More Than the First Match
// You can have multiple flags on your regex like /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /TWINKLE/gi; 
let result = twinkleStar.match(starRegex); 
console.log(result);