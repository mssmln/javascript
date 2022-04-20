// Find Characters with Lazy Matching
// a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match
// a lazy match finds the smallest possible part of the string that satisfies the regex pattern

// /t[a-z]*i/ with greedy ["titani"]
// /t[a-z]*?i/ with lazy ["ti"]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
// let myRegex = /.*?>/; also works
let result = text.match(myRegex);
console.log(result);