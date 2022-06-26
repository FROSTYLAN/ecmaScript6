let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1)); // recibe la profundidad de argumento.

console.log(array.flat(2)); // Para aplanar al segundo nivel.
