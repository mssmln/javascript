// Missing letters
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    const alp = "abcdefghijklmnopqrstuvwxyz".match(/.{1}/g);
    const startInd = alp.findIndex(el => str[0] === el);
    const endInd = alp.findIndex(el => str[str.length -1] === el) +1;
    return alp.slice(startInd,endInd).find((el,i) => el !== str[i]);



    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }
    }
    return undefined;



    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
    str.split("").forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    });
    return missing;



    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }



    var allChars = "";
    var notChars = new RegExp("[^" + str + "]", "g"); // /[^abce]/g
    for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++) {
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
    }
    return allChars.match(notChars)
      ? allChars.match(notChars).join("")
      : undefined;
}
    
console.log(fearNotLetter("abce"));

/*
fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.
fearNotLetter("bcdf") should return the string e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/