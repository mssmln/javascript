// Counting Cards
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log( cc(2), cc(3), cc(7), cc('K'), cc('A') );


// or
function cc1(card) {
  let regex = /[JQKA]/; 

  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) { 
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";
}

console.log( cc1(2), cc1(3), cc1(7), cc1('K'), cc1('A') );