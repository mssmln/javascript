// Wherefore art thou
/*
Make a function that looks through an array of objects (first argument) and 
returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the 
object from the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
    const arr = [];
    let i = 0;
    const copy = [...collection];
    
    while (i < collection.length) {
        const obj = copy.shift();
        if (Object.keys(source).every(el => el in obj && source[el] === obj[el])) {
            arr.push(obj);
        }
        i++;
    } 
    return arr;

    /*
    const souceKeys = Object.keys(source);
    return collection.filter(obj => {
        for (let i = 0; i < souceKeys.length; i++) {
            if (!obj.hasOwnProperty(souceKeys[i]) || obj[souceKeys[i]] !== source[souceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
    */

    /*
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
    */

    /*
    const sourceKeys = Object.keys(source);
    return collection.filter(obj => sourceKeys.map(key => obj.hasOwnProperty(key) && obj[key] === source[key]).reduce((a, b) => a && b));
    */
}
  
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
*/