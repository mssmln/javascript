// Title Case a Sentence
function titleCase(str) { 

    /*const splittato = str.split(" ");    
    const updatedTitle = [];
    for (let st in splittato) {
        updatedTitle[st] = splittato[st][0].toUpperCase() + splittato[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");*/
  
    /*return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");*/
  
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
  
console.log(titleCase("I'm a little tea pot"));

/*
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
*/