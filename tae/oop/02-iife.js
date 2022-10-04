// Understand the Immediately Invoked Function Expression (IIFE)
/*
Note that the function has no name and is not stored in a variable
The two parentheses () at the end of the function expression cause it to be immediately executed or invoked
This pattern is known as an immediately invoked function expression or IIFE
*/

(function () {
  console.log("A cozy nest is ready");
})();


/*
An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module
down here we are grouping these mixins into a module
Note that you have an immediately invoked function expression (IIFE) that returns an object funModule
This returned object contains all of the mixin behaviors as properties of the object
The advantage of the module pattern is that all of the fun behaviors can be packaged into a single object 
that can then be used by other parts of your code
*/


// let funModule = (function() {
//     return {
//       isCuteMixin: function(obj) {
//         obj.isCute = function() {
//           return true;
//         };
//       },
//       singMixin: function(obj) {
//         obj.sing = function() {
//           console.log("Singing to an awesome tune");
//         };
//       }
//     };
// })();  


// ES6
let funModule = ( () => {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => "Singing to an awesome tune";
    }
  }
})();

let sing = {};
let cute = {};

funModule.singMixin(sing);
funModule.isCuteMixin(cute);

console.log(sing.sing());
console.log(cute.isCute());