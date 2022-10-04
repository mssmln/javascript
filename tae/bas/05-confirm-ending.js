// Confirm the Ending
function confirmEnding(str, target) {
    // return str.endsWith(target);

    // return new RegExp(`${target}$`,"i").test(str);  

    // return str.slice(str.length - target.length) === target;

    return str.slice(-target.length) === target;
}  

console.log(confirmEnding("Bastian", "n"));