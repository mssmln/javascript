// Positive and Negative Lookahead
// A positive lookahead will look to make sure the element in the search pattern is there, but won't match it
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched

// A negative lookahead will look to make sure the element in the search pattern is not there
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there
// The rest of the pattern is returned if the negative lookahead part is not present

let sampleWord = "123456";
// the first condition says pw has to be 6 chars long
// the second condition says 2 digits at the end
// and 0 or more chars beforehand
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result);

/*

Your regex should not match the string astronaut
Your regex should not match the string banan1
Your regex should match the string bana12
Your regex should match the string abc123
Your regex should match the string 123456
Your regex should not match the string 12345
Your regex should match the string 8pass99
Your regex should not match the string 1a2bcde
Your regex should match the string astr1on11aut

*/