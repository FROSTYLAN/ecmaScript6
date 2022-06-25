// ARROW FUCTIONS

const names = [
  { name: "Oscar", age: 32 },
  { name: "Yesica", age: 27 },
];

let listNames = names.map(function (item) {
  console.log(item.name);
});

// ES6
let listNames2 = names.map((item) => console.log(item.name));

let listNames3 = (name, age, country) => {
  "...code";
};

let listNames4 = (name) => {
  "...code";
};

const square = (num) => num * num;

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
