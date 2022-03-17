// questo nel html
<script type="module" src="index.js"></script>

// js da esportare
const uppercaseString = (string) => {
    return string.toUpperCase();
}
  
const lowercaseString = (string) => {
    return string.toLowerCase();
}
  
export { uppercaseString, lowercaseString };
// or by putting export syntax before each const


// in the js file you want to import the functions above
import { uppercaseString, lowercaseString } from './<path-to-file>';

uppercaseString("hello");
lowercaseString("WORLD!");


// * per importare tutto da un file
import * as stringFunctions from './<path-to-file>';
// import will create an obj called stringFunctions

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// esempio di un export default
export default function subtract(x, y) {
    return x - y;
}
// you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module
// the function can be anonymous (not named) and you cannot use var, let or const
// since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file


// import a default export
import subtract from './<path-to-file>';
// no need to use {}
// it's just a variable name, name it as you like
subtract(7,4);