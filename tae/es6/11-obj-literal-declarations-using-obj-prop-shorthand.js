// Write Concise Object Literal Declarations Using Object Property Shorthand

// const createPerson = (name, age, gender) => {
//     return {name, age, gender};
// };
 
const createPerson = (name, age, gender) => ({name, age, gender});  
console.table(createPerson("Zodiac Hasbro", 56, "male"));