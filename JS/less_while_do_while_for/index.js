const arr = [11, 23, 37, 45, 51, 78, 34]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 45) {
// console.log('end: ' + arr[i]);
// break;
//     continue;
// }
// console.log(arr[i]);
// }

let i = 0;

// while (i < arr.length) {
// break;
// continue;
// console.log(arr[i]);
// i++
// }
// console.log('end');

// Сначало проверить потом сделает
while (i < 0) {
    console.log('test');
}

// Сначало сделает потом проверить
do {
    console.log('test2');
} while (i < 0)
console.log('end');