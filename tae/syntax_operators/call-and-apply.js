// call
function Product(name, price) {
    this.name = name;
    this.price = price;
}
  
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
  
function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}
  
const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
console.log(cheese);
console.log(fun);  


// apply
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); 
// col concat avremmo creato un nuovo array e non lo volevamo, neanche utilizzare un loop