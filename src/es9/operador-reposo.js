const obj = {
  name: "Charles",
  age: 18,
  country: "PE",
};

let { name, ...all } = obj;
console.log(name);
console.log(all);

// https://coder-solution-es.com/solution-es-blog/1162823
