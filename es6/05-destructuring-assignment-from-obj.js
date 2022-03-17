// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today,tomorrow:domani} = HIGH_TEMPERATURES;
console.log(today,domani); // abbiamo nominato la const domani invece che tomorrow