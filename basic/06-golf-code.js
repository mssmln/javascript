// Golf Code
const NAMES = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  return strokes == 1
    ? NAMES[0]
    : strokes <= par - 2
    ? NAMES[1]
    : strokes == par - 1
    ? NAMES[2]
    : strokes == par
    ? NAMES[3]
    : strokes == par + 1
    ? NAMES[4]
    : strokes == par + 2
    ? NAMES[5]
    : strokes >= par + 3
    ? NAMES[6]
    : "Change Me";
}

console.log(golfScore(1,2));