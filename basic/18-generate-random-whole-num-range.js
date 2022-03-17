// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(4,8));


/*
(myMax - myMin + 1)
(+) and (-) Precedence 12 left-to-right	

*/