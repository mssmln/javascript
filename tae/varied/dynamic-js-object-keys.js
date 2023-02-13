// Dynamic JavaScript Object Keys
// non da fcc
const dataFromAPI = 'age';
let existingObject = {
  name: 'John',
  [dataFromAPI]: 25
};
console.log(existingObject.age);


const newData = "lottery";
const didUserWin = true;
let newObject = {
  name: 'Doug',
  age: 42,
  [newData + (didUserWin ? 'Winner': 'Loser')]: "Assign any value or data here"
};
console.log(newObject.lotteryWinner);