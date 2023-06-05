// Тип данных Object
// Массив []
// find() => {}
// some() => true/false
// filter() => [1,2,3,4] => [1,2,3]
// map() => ['15', '123'] => [15, 123]

// const prefix = 'PREF_';
// const myArray = ['hi', 'hello'];
// ['PREF_hi', 'PREF_hello']

// myArray.forEach((element) => {
//     // return - не нужно
// });

// const ru = 'Русский';
// const en = 'Англиский';

// const array = ['Русский', 'Англиский', 'Белорусский'];
// const array2 = [ru, en];

// console.log(array.length);

// Array.isArray()
// push() - добавить в конец
// unshift() - добавить в начало
// pop(), - удалить конец
// shift() - удалить начало
// concat()
// includes()
// split() и join()

// flat()
// reverse()

// forEach()

// sort()
// slice(), splice() - [1,2,3,4,5,6] => [2,3] || [2] || [1,3]

// let myArray = [1, 2, 3, 4, 5];
// let prefix = 'PREF_';
// let myArray2 = ['hi', 'hello'];

// myArray.forEach((elem)=>{
//     console.log(elem);
// })

// console.log(myArray);

// let newArr = myArray2.map((el) => {
//     return prefix + el;
// })

// console.log(newArr);

let myArr = [{
    name: 'alex1',
    hasAccount: true,
}, {
    name: 'john',
    hasAccount: false,
}]

// let newArr3 = MyArr3.map((el)=>{
//     console.log(el);
//     return el.name
//})

// let newArr3 = myArr.filter((user)=>{
// return user.hasAccount ? true : false
// })

// console.log(newArr3);

// let newArr4 = myArr.filter((user)=>{
//     if (user.name.length > 4){
//     return true
//     }
// });
// console.log(newArr4);

let myArr5 = [1, 2, 3, { hello: 'world' }];
// console.log(myArr5.includes());

// let elem = myArr5.some((value)=>{
//    if (typeof value === 'object') {
//     return true
//    }
// })

// let elem = myArr5.find((val) => {
//     return typeof val === 'object' ? true : false
// })


// let elem = myArr.find((user) => {
//     return user.name === 'alex1' ? true : false

// })

// console.log(elem);

// const data = [{
//     id: 1,
//     title: 'Новость дня',
//     author: 'Alex',
//     likes: 50
// }, {
//     id: 2,
//     title: 'Важная новость',
//     author: 'Anna',
//     likes: 150
// }, {
//     id: 3,
//     title: 'Важная новость #2',
//     author: 'John',
//     likes: 140
// }];

// let data1 = data.filter((elem) => {
//     // return elem.likes > 100 ? true : false;
//     return elem.likes > 100; // сокращенная запись
// })
// // console.log(data1);

// // let data2 = data1.map((elem) => {
// //     // console.log(elem);
// //     return {
// //         id: elem.id,
// //         title: elem.title,
// //     }
// // })
// // console.log(data2);

// let data3 = data1.map((elem) => {
//     return elem.author
// })
// // console.log(data3);

// // let bestAuthor = data.find((element) => {
// //     return element.likes >= 150

// // })
// // console.log(bestAuthor);
// // конкатенация

// // let Arr = [1, 2, 3, 4, 5];
// // let res = 0;
// // Arr.forEach((el) => {
// // res+=el
// // })
// // console.log(res);

// // let arr2 = ['my', 'name', 'is', 'Alex']
// // let res = ''

// // arr2.forEach((el) => {
// // // res += ' ' + el
// // // res +=el.join(' ')
// // })
// // console.log(arr2.join(' '));

// // let arr3 = [15, 10, 20, 30];
// // res = arr3.some((el) => {

// //     return el === 20 ? true : false
// // })
// // console.log(res);

// let arr4 = [{
//     name: 'Alex',
//     age: 20,
// },
// {
//     name: 'Anna',
//     age: 30,
// },
// {
//     name: 'John',
//     age: 10,
// }]

// let user18 = arr4.filter((el) => {
//     return el.age > 18
// })
// let user = user.map((el) => {
//     return el.name
// })
// console.log(user);

// reduce

// let test = ['Orange', 'Banane', 'Persik'];

// let res = test.reduce((acc, item) => {
// acc[`name-${item}`] = item
//     return acc
// }, {})

// let res = test.reduce((acc, item) => {
// acc += item
//     return acc
// }, '')

// let test = [1,2,3,4,5]

// let res = test.reduce((acc, num)=>{
//     acc.push(num)
//     return acc
// }, [])

// console.log(res);


// flat()
// concat()

let test2 = [
    ['Orange'],
    ['Persik'],
    ['banan']
];

// console.log(test2.flat());
// let res = []
// test2.forEach((arr)=>{
//     res.push(arr[0])
// })
// console.log(res);

// let res = test2.reduce((acc, item) => {
//     acc.push(item[0])
//     return acc;
// }, [])

// let res = test2.reduce((acc, item) => {
//     acc += ' ' + item[0]
//     return acc;
// }, [])

// console.log(res);

let goodProd = ['Салат', 'Вода', 'Шоколад', 'Булка'];

let test3 = [{
    title: 'Сникерс',
    composition: ['шоколад', 'Сахар', 'Нуга', 'Что-то еще'],
}, {
    title: 'Бургер',
    composition: ['Булка', 'Котлета', 'Салат', 'Другие овощи'],
}, {
    title: 'Липтон',
    composition: ['Вода', 'Сахар', 'Сок лимона', 'Щепотка магии'],
}
]

// let res = []
// test3.forEach((prod) => {
//     // console.log(prod.composition);
//     let composition = []

//     prod.composition.forEach((item) => {
// composition.push({
//     name: item,
// })
//     });

//     res.push({
//         title: prod.title,
//         composition,
//     })
// })



let res = test3.reduce((acc, prod) => {

    let composition = prod.composition.reduce((acc2, item) => {
        acc2.push({
            name: item,
            good: goodProd.includes(item),
        });

        return acc2;
    }, []);

    acc.push({
        title: prod.title,
        composition: composition,
    })

    return acc;
}, []);

console.log(res);