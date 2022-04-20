// Match Ending String Patterns
let caboose = "The last car on a train is the caboose ";
// the dollar sign character is used to verify if
// at the last index caboose can be found
// now it's false because of a blank character
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);
console.log(result);