let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse)); // false

let isTrue2 = true;
let isFalse2 = false;
console.log((isTrue ||= isFalse)); // true

let isTrue3 = true;
let isFalse3 = false;
console.log((isTrue ??= isFalse)); // false
