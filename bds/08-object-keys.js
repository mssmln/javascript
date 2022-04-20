// Generate an Array of All Object Keys with Object.keys()
/*
The Object.keys() method returns an array of a given object's own enumerable property names
iterated in the same order that a normal loop would
*/

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
  
console.log(getArrayOfUsers(users));