// DESESTRUCTURAZIÓN
let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

// ES6
let { name, age } = person;
console.log(name, age);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
