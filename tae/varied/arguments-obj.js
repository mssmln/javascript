// not available for arrow func
// it lacks all Array properties except length
function func1(a, b, c) {
    console.log(arguments[1]);
}
func1(1, 2, 3);


// but we can convert it into an array with these 4 ways
// IIFE (Immediately Invoked Function Expression)
(function (){
    let args = Array.prototype.slice.call(arguments);
    console.log(args); 
})();


(function (){
    let args = [].slice.call(arguments);
    console.log(args); 
})();


(function (){
    let args = Array.from(arguments);
    console.log(args); 
})();


(function (){
    let args = [...arguments];
    console.log(args); 
})();