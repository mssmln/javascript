// Define a Constructor Function
/*
Constructors are functions that create new objects
They define properties and behaviors that will belong to the new object
Think of them as a blueprint for the creation of new objects
Constructors define properties and behaviors instead of returning a value as other functions might
*/

function Dog(name, color) {
  this.name = name; // own property
  this.color = color;
  // this.numLegs = 4;
}


function Dog1() {
  (this.name = "George"), (this.color = "White"), (this.numLegs = 4);
}

let hound = new Dog("Tommy", "black");
// console.log(hound instanceof Dog); // hound.constructor === Dog is an alternative

let arr = [];
for (let p in hound) {
  if (!arr.includes(p)) arr.push(p);
}
// console.log(arr);


/*
Since numLegs will probably have the same value for all instances of Dog
you essentially have a duplicated variable numLegs inside each Dog instance
This may not be an issue when there are only two instances, but imagine if there are millions of instances
That would be a lot of duplicated variables
A better way is to use the prototype of Dog. Properties in the prototype are shared among ALL instances of Dog
*/

Dog.prototype.numLegs = 4; // prototype property
// console.log(hound.numLegs);

// push own props in an array and push prototype props in another
let ownProps = [];
let prototypeProps = [];
for (let p in hound) {
  if (hound.hasOwnProperty(p)) { // don't use Dog.hasOwnProperty(p)
    ownProps.push(p);
  } else {
    prototypeProps.push(p);
  }
}
console.log("ownProps", ownProps);
console.log("prototypeProps", prototypeProps);


// down here we add props all at once rather than individually as numLegs
Dog.prototype = { // set the constructor prop when changing the prototype
  /*
  when we set manually the prototype to a new obj
  it erases the constructor prop
  this prop can be used to check which constructor func created the instance
  but since the prop has been overwritten
  it now gives false
  that's why it's better to use instanceof
  */
  constructor: Dog,
  eat: () => console.log("eat"),
  prova() {
    console.log("nom nom nom");
  },
  describe: function() {
    return 2 + 2;
  }
};
let h = new Dog();
console.log("h runs describe", h.describe());
console.log(h.constructor === Dog); // it would evaluates to false if we commented the constructor prop
console.log(h.constructor === Object);
console.log(h instanceof Dog);

/*
an obj inherits its prototype from the constructor func that created it
h inherits its prototype from the Dog constructor func
you can show this relationship with the isPrototypeOf method
*/
console.log("isPrototypeOf", Dog.prototype.isPrototypeOf(h));

/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object
Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Dog.prototype is Object.prototype
i.e. the hasOwnProperty method is defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by h
This is an example of the prototype chain. In this prototype chain, Dog is the supertype for h, while h is the subtype. Object is a supertype for both Dog and h
Object is a supertype for all objects in JavaScript
Therefore, any object can use the hasOwnProperty method
*/
console.log(Object.prototype.isPrototypeOf(Dog.prototype));


/*
Don't Repeat Yourself (DRY)
The describe method was repeated in both Cat and Bear
The code has been edited to follow the DRY principle by creating a supertype (or parent) called Animal
*/

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "pasta with anchovy";
  }
};


/*
You already know one way to create an instance of Animal using the new operator
There are some disadvantages when using this syntax for inheritance
Instead, here's an alternative approach without those disadvantages
Object.create(obj) creates a new object, and sets obj as the new object's prototype
Recall that the prototype is like the "recipe" for creating an object
By setting the prototype of animal to be the prototype of Animal
you are effectively giving the animal instance the same "recipe" as any other instance of Animal
*/

let animal = Object.create(Animal.prototype);

let 
  duck = animal,
  beagle = animal;

console.log("duck", duck.eat());
console.log("beagle", beagle.eat());


/*
set the prototype of the subtype (or child)—in this case, Lion—to be an instance of Animal
lion inherits all of Animal's properties, including the eat method
*/
function Lion(name) {
  this.name = name;
}
Lion.prototype = Object.create(Animal.prototype);

/*
When an object inherits its prototype from another object, it also inherits the supertype's constructor property
But lion and all instances of Lion should show that they were constructed by Lion and not Animal 
To do so, you can manually set the constructor property of Lion to the Lion object
*/
Lion.prototype.constructor = Lion;

/*
A constructor function that inherits its prototype object from a supertype constructor function 
can still have its own methods in addition to inherited methods
In addition to what is inherited from Animal, you want to add behavior that is unique to Lion objects
*/
Lion.prototype.roar = () => "the lion is roaring";

let lion = new Lion("Simba");
console.log("this is lion obj", lion.eat(), lion.name, lion.roar());
console.log(lion.constructor); // will return Lion rather than Animal


/*
It's possible to override an inherited method using the same method name as the one to override
this is how JavaScript looks for the method on the prototype chain of train:

train => Is roar() defined here? No.
Train => Is roar() defined here? => Yes. Execute it and stop searching.
Lion => roar() is also defined, but JavaScript stopped searching before reaching this level.
Animal => JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
*/
function Train(name) {
  this.name = name;
}
Train.prototype = Object.create(Lion.prototype);
Train.prototype = {
  constructor: Train,
  roar() {
    return "still roaring but not a lion";
  }
}
let train = new Train();
console.log(train.roar());


/*
As you have seen, behavior is shared through inheritance
However, there are cases when inheritance is not the best solution
Inheritance does not work well for unrelated objects like Lion and Train 
They can both roar, but a Lion is not a type of Train and vice versa
For unrelated objects, it's better to use mixins
A mixin allows other objects to use a collection of functions

The roarMixin takes any object and gives it the roar method
Note how the mixin allows for the same roar method to be reused by unrelated objects train1 and plane1
*/
let roarMixin = obj => {
  obj.roar = () => "roaring";
}
let train1 = {};
let plane1 = {};

roarMixin(train1);
roarMixin(plane1);

console.log(train1.roar(), plane1.roar());


/*
It is considered public prop when it can be accessed and changed outside of obj definition
such as bird.weight = 11
The simplest way to make this public property private is by creating a variable within the constructor function
This changes the scope of that variable to be within the constructor function versus available globally
This way, the variable can only be accessed and changed by methods also within the constructor function
rather than this.weight = 15; and this.getWeight = () => this.weight;
down here getWeight is a privileged method, because it has access to the private variable weight 
This is possible because weight is declared in the same context as getWeight 
In JavaScript, a function always has access to the context in which it was created
This is called closure
*/
function Bird() {
  let weight = 15;
  this.getWeight = () => weight;
}

let bird = new Bird();
console.log(bird.getWeight());