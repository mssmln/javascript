// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; 
let replaceText = '$3 $2 $1'; 
// replace's second parameter string or function
let result = str.replace(fixRegex, replaceText);
console.log(result);