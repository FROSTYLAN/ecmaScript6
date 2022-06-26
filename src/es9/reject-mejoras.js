const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

// Como mejoró el manejo de Regex?
// esto es super util para trabajar con fechas
// como sabemos,las fechas tienen:año,mes,dóa
// el[0-9]nos indica el rango de números,mientras que el /
//{4} nos indica que se necesitan máximo4números
