// se ti occore stampare \n senza creare una nuova linea
console.log(String.raw`Hi\n${2+3}!`);

// \u000A è come scrivere \n quindi crea una nuova linea, ma con String.raw ce lo fa stampare
console.log(String.raw`Hi\u000A!`);

// simile al primo esempio ma con una variabile
let name = 'Bob';
console.log(String.raw`Hi\n${name}!`);

console.log(
    String.raw({
        raw: ['foo', 'bar', 'baz']
    }, 2 + 3, 'Java' + 'Script')
); 

// codice equivalente `t${0}e${1}s${2}t`
console.log(String.raw({ raw: 'test' }, 0, 1, 2)); 