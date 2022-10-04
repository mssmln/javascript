// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let resNull = "a";
let resJustOne = "Ab";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);
let result1 = resNull.match(chewieRegex);
let result2 = resJustOne.match(chewieRegex);
console.log(result);
console.log(result1);
console.log(result2);