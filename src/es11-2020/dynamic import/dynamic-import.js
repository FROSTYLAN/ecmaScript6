//Dynamic import ( importación dinámica)
//Permite llamar nuestro código cuando lo necesitemos.
//El archivo no se va a cargar de manera automatica.
//Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.
// Por todo lo anterior, mejora la performance.

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});
