let buffer = new ArrayBuffer(8); // size in bytes
console.log(buffer);
buffer[0] = 'ciao';
console.log(buffer[0]);

let view1 = new Int32Array(buffer);
console.log(view1);

let view2 = new DataView(buffer, 0);

view2.setInt16(1, 42);
console.log(view2.getInt16(1));