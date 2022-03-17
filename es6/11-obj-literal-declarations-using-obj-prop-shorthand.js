// Write Concise Object Literal Declarations Using Object Property Shorthand
// three lines solution
// const createPerson = (name, age, gender) => {
//     return { name, age, gender };
// };
 
// one line solution
const createPerson = (name, age, gender) => ({ name, age, gender });  
console.table(createPerson("Zodiac Hasbro", 56, "male"));