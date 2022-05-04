String.prototype.capitalize = 
String.prototype.capitalize ||
function() {
  return this[0].toUpperCase() + this.slice(1);
};

const Util = (function() {
  function textCase(str, tCase) {
    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }

    function setCase(str, tCase) {
      switch (tCase) {
        case "uppercase":
          return str.toUpperCase();
        case "lowercase":
          return str.toLowerCase();
        case "capitalized":
          return str.capitalize();
        default:
          return str;
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) {
        return "uppercase";
      }
      if (str === str.toLowerCase()) {
        return "lowercase";
      }
      if (str === str.capitalize()) {
        return "capitalized";
      }
      return "normal";
    }
  }

  return { textCase };
})();

function myReplace(str, before, after) {
  const { textCase } = Util;
  const regex = new RegExp(before, "gi");
  const replacingStr = textCase(after, textCase(before));
  return str.replace(regex, replacingStr);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));