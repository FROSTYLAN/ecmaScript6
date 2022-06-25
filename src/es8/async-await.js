const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

//ES8

const helloAsync = async () => {
  const hello = await helloWorld(); // Va a esperar q esto ocurra.
  console.log(hello);
};

helloAsync();

// Forma propuesta para manejar correctamente los errores
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
