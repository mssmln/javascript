// Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
  
const carrot = new Vegetable('carrot');
console.log(carrot); 

// es5
var es5 = function(name) {
  this.name = name; 
}
      
var car = new es5('car');
console.log(car);