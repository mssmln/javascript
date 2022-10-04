// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit; // It is convention to precede the name of a private variable with an underscore (_)
  }

  get temperature() {
    return 5 / 9 * (this._fahrenheit - 32); // 0.5555555555555556 * 44 = 24.44444444444444
  }
  
  set temperature(celsius) {
    this._fahrenheit = celsius * 9.0 / 5 + 32;
  }
}
  
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26; // setter, they do not even look like functions. Getters and setters are important because they hide internal implementation details.
console.log(temp = thermos.temperature); // 26 in Celsius