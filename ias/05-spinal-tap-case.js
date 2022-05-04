// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    const regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.toLowerCase().split(/(?:_| )+/).join("-");

    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

console.log(spinalCase("The_Andy_GrifDfith_Show"));

/*
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/