// Write Concise Declarative Functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear) { 
        "use strict";
        this.gear = newGear; 
    }  
    // setGear: function(newGear) { this.gear = newGear; } ES5
};
  
bicycle.setGear(3);
console.log(bicycle.gear);