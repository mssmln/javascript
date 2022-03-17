// Prevent Object Mutation
function freezeObj() {
  'use strict'; // usandolo vediamo in output il log di catch
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return console.log(MATH_CONSTANTS.PI);
}
const PI = freezeObj();