function init() {
    let name = 'Mozilla'; 
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

function makeFunc() {
    let name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
}  
let myFunc = makeFunc();
// The instance of displayName (myFunc) maintains a reference to its lexical environment, within which the variable name exists
myFunc();



let greeting = (function() {
  let message = "hi";
  let getMessage = function() {
    return message;
  };
  return {
    msg: getMessage
  };
})();
console.log(greeting.msg());


function setC(val){
  return function counter() { // le diamo un nome per debug
    return val++;    
  }
}
let c = setC(0);
console.log(c());
console.log(c());
let cc = setC(10);
console.log(cc());
console.log(cc());