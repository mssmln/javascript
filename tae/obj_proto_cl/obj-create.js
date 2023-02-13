const target = { a: 1, b: 2 };

const create = Object.create(target);
console.log(create);
console.log(create.b);