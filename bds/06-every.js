// Check if an Object has a Property
/*
The every() method tests whether all elements in the array pass the test implemented by the provided function
It returns a Boolean value
*/

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name => name in userObj);
}

console.log(isEveryoneHere(users));