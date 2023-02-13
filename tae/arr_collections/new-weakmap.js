const WM = new WeakMap();

let string = 'sono una stringa';
// WM.set(string); // keys must be objs, it'll throw an error

WM.forEach(el => console.log(el)); // not iterable