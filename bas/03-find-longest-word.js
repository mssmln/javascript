// Find the Longest Word in a String
function findLongestWordLength(str) {
    let longest = 0;
    str.split(" ").forEach(el => {
      if (longest < el.length) {
        longest = el.length;
      }
    });
    return longest;
}
//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



function findLongestWordLength1(s) {
    return s.split(' ')
      .reduce((longest, word) => Math.max(longest, word.length), 0); // longest value on first call will be initial value or rather 0
}
//console.log(findLongestWordLength1("The quick brown fox jumped over the lazy dog"));



function findLongestWordLength2(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}
//console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"));



function findLongestWordLength3(str) {
    const words = str.split(" ");
  
    if (words.length == 1) {
      return words[0].length;
    }
  
    return Math.max(
      words[0].length,
      findLongestWordLength3(words.slice(1).join(" ")) // findLongestWordLength takes a string argument, so if you are going to call it recursively then you need to pass it a string
    );
}
console.log(findLongestWordLength3("The quick brown fox jumped over the lazy dog"));



function findLongestWord4(str) {
    let longestWord = str.split(' ').sort((a,b) => b.length - a.length);
    return longestWord[0].length;
}
//console.log(findLongestWord4("The quick brown fox jumped over the lazy dog"));

/* 
    a           b            b.length     a.length     let longestWord
  "The"      "quick"            5            3         ["quick", "The"]
  "quick"    "brown"            5            5         ["quick", "brown", "The"]  
  "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
  "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
  "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
  "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
  "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
  "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
*/



// there was an initial value in reduce in the original solution set to "" but the program seems to work perfectly without it
function findLongestWord5(str) {
    return str.split(' ').reduce((a, b) => b.length > a.length ? b : a).length;
}
console.log(findLongestWord5("The quick brown fox jumped over the lazy dog sestaSoluzione"));