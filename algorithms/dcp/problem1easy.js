// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

function problem1 (arr, k) {
    arr.forEach(it => {
        arr.slice(1).forEach(el => {
            let r = 0;
            if (arr.indexOf(el) > arr.indexOf(it)) r = it + el;
            if (r === k) console.log(`true because ${it} + ${el}`);
        })
    })


    /*
    arr.forEach((item, index, me) => {
        const tmp = [...me]
        const nElements = tmp.length - (index +1)
        const partial = tmp.splice(index +1, nElements)
        partial.filter(el => item + el === k).forEach(el => console.log(`${item} + ${el} = ${k}`))
    }
    */
    
    
    /*
    let indexZero = arr[0];
    for (let z=1; z<arr.length; z++){
        for (let i=1; i<arr.length; i++){
            let r;
            // console.log( arr.indexOf(arr[i]) + " is > than " + arr.indexOf(indexZero) + " | " + arr[i] + " - " + indexZero);
            if ( arr.indexOf(arr[i]) > arr.indexOf(indexZero) ) r = indexZero + arr[i];
            if (r === k) console.log(true + " because " + indexZero + " + " + arr[i]);
            // else console.log(false, r);
        }
        indexZero = arr[z];
        // console.log("indexZero dopo il primo for", indexZero);
    }
    */
}

problem1([3, 5, 2, 15, 9, 8, 14], 17);