const obj = {
  name: "Charles",
  age: 18,
  country: "PE",
};

let { name, ...all } = obj;
console.log(all);
