let str = "hey JudE";
let re = /[A-Z]/g;
let reDot = /[.]/g;
// al contrario di match che ritorna J,E con search ritorna la posizione index della sola prima corrispondenza, la g non ha effetto
console.log(str.search(re));    
// ritorna -1 perchè non trova niente
console.log(str.search(reDot));