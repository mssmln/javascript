// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stat_0 = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
  
const stat_1 = {
    max: 13,
    min: 3
};

const half = ({max, min}) => (max + min) / 2.0; // best solution
// const half = arg => (arg.max + arg.min) / 2.0; 

console.log(half(stat_0)); 
console.log(half(stat_1)); 