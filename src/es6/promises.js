// PROMESAS
// Para trabajar con asincronismo

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

//  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
