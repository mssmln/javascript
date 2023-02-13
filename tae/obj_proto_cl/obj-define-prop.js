'use strict';

const object1 = {
    property1: 42,
    materia: 'programmazione'
};

console.log(Object.getOwnPropertyDescriptor(object1, 'property1'));

// only in strict mode
Object.defineProperty(object1, 'property1', {writable: false});
// console.log(object1.property1 = 30);

Object.defineProperty(object1, 'property1', {enumerable: false});
// with these 3 ways we cannot see property1
for(let propName in object1){
    console.log(propName + ': ' + object1[propName]);
}

console.log(Object.keys(object1));
console.log(JSON.stringify(object1));
// but you can see them this way
console.log(object1.property1);

// configurable
Object.defineProperty(object1, 'property1', {configurable: false});
console.log(Object.defineProperty(object1, 'property1', {configurable: true})); // not allowed once set configurable false
console.log(Object.defineProperty(object1, 'property1', {enumerable: true})); // not allowed once set configurable false
// but you can change the writable value