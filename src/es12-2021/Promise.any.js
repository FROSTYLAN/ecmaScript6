const promises1 = new Promise((resolve, reject) => reject("1"));
const promises2 = new Promise((resolve, reject) => resolve("2"));
const promises3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promises1, promises2, promises3]).then((response) =>
  console.log(response)
);

// retorna la primera promesa que resuelva
