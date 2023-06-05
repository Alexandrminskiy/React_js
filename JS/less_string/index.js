// Кавычки
// Экранирование
// Конкатенация
// toString, toUpperCase
// split, repeat
// slice, indexOf, includes, startsWith, endsWith
// slice (substring), substr
// replace, replaceAll
// padStart, padEnd, trim, trimStart, trimEnd

// let str = 'qwe\'ry';
// console.log(str);
// console.log(typeof str);

// let one = 'one'
// let two = 'two'
// console.log(`${one} ${two}`);

let channel = 'Какая то строка';
// console.log(channel.length); // длина строки
// console.log(channel.toLowerCase());
// console.log(channel.toUpperCase());

// let split = '[11, 22, 33, 44]';
// console.log(split.split(' '));

// console.log(channel.indexOf('т')); // Поиск по символу
// console.log(channel.charAt('6')); // Поиск по индексу
// console.log(channel.includes('то')); // Поиск (startsWith с начало , endsWith с конца) true false

let login = '   вырезаем лишнее   '
console.log(login.slice(3, 18));
console.log(login.trim()); // Вырезает все пробелы