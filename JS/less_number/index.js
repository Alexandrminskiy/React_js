// Math.pow / **
// Math.ceil - окргление к большему
// Math.floor - к меньшему
// Math.round - до ближайшего целого



// console.log(Math.ceil(0.1));
// console.log(Math.floor(0.1));
// console.log(Math.round(0.5));

let tests = 0.1 + 0.2;
console.log(+tests.toFixed(3)); //округляет
console.log(Number('9.99'));

console.log(Number.parseFloat('9.99op'));
console.log(Number.parseInt('9.99op'));

let test = 10;
console.log(test.toString()); // строка

console.log(Math.pow(2, 5)); // в степень
console.log(2**5)

let tes = 123 / 'tes';
console.log(Number.isNaN(tes)); // Проверка на NaN
console.log(Number.isInteger(123.11)); // Проверка на целое число

