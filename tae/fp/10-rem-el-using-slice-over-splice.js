// Remove Elements from an Array Using slice Instead of splice
/*
Using the slice method instead of splice helps to avoid any array-mutating side effects.
*/

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
  
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));