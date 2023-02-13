console.log('alpha' < 'zeta'); // true, because 'a' comes before 'z'
console.log('alpha' < 'Zeta'); // false, because 'Z' = 90 in ASCII, and 'a' = 97
console.log('one' < '1'); // false, because '1' = 49 in ASCII, and 'o' = 111
console.log('octo' < 'okto'); // true, because 'c' = 99, and 'k' = 107
console.log('a' < 'alpha'); // true, because end of string = '0' in ASCII
console.log(['Zeta', '1', 'alpha', ''].sort()); // ['', '1', 'Zeta', 'alpha']);


// sort by last name
const characters = [
  { firstName: 'Jean-Luc', lastName: 'Picard', rank: 'Captain', age: 59 },
  { firstName: 'Will', lastName: 'Riker', rank: 'Commander', age: 29 },
  { firstName: 'Geordi', lastName: 'La Forge', rank: 'Lieutenant', age: 29 }
];
  
characters.sort((a, b) => {
  if (a === b) {
    return 0;
  }
  return a.lastName < b.lastName ? -1 : 1;
});
console.log(characters); // La Forge, Picard, Riker


// alternative
characters.sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log(characters); // La Forge, Picard, Riker