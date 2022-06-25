// DEFAULT PARAMS
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "PE";
  console.log(name, age, country);
}
// es6
function newFunction2(name = "oscar", age = 32, country = "PE") {
  console.log(name, age, country);
}

newFunction2(); // Pasa los parámetros por defecto.
newFunction2("Ricardo", "23", "C0");
