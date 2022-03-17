// Use the Rest Parameter with Function Parameters
const SUM = (...args) => {
    console.log(args);
    // 1 is initialValue
    return args.reduce((a, b) => a + b, 1); 
}
console.log(SUM(1,2,3,{},true,[],'string'));