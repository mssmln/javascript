// Pig Latin
/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str, charPos = 0) {
  const r = str.match(/^[bcdfghjklmnpqrstvwxyz]+/);
  return /^[bcdfghjklmnpqrstvwxyz]+/.test(str)
    ? str.replace(r, "").concat(r + "ay")
    : str.concat("way"); // /^[aeiou]/.test(str)


  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");


  var pigLatin = "";
  var regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
  return pigLatin;


  if (str.match(/^[aeiou]/)) return str + "way";
  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";


  return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");


  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}
  
console.log(translatePigLatin("schwartz"));

/*
translatePigLatin("california") should return the string aliforniacay.
translatePigLatin("paragraphs") should return the string aragraphspay.
translatePigLatin("glove") should return the string oveglay.
translatePigLatin("algorithm") should return the string algorithmway.
translatePigLatin("eight") should return the string eightway.
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
*/