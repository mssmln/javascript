// you approached regex for the first time using one way, literal notation
// new RegExp introduces the second way, the constructor 
// Use the constructor function when you know the regular expression pattern will be changing
// or you don't know the pattern and obtain it from another source, such as user input

const regex1 = RegExp('foo*', 'g'); // new keyword is optional
const str1 = 'table football, foosball';
let array1;

while ( (array1 = regex1.exec(str1)) !== null ) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
}