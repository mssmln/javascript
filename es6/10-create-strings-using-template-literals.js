// Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
  
function makeList(arr) {
    // one line solution
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`); 

    // four lines solution
    // const failureItems = [];
    // for(let i=0; i<arr.length; i++){  
    //     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    // }

    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);