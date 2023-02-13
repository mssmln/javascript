let greeting = {};

greeting.sayHi = function(){
    console.log(this);
}
greeting.sayHi();


function sayHi() {
    console.log(this);
}
new sayHi();