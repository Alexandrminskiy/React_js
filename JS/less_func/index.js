// Функции
// const cart = [{
//     name: 'Арбуз',
//     price: 100,
//     count: 1,
// }, {
//     name: 'Хлеб',
//     price: 10,
//     count: 2,
// }, {
//     name: 'Молоко',
//     price: 50,
//     count: 1,
// }];

// let finPrice = 0;
function calFinPrice(cart) {
    let finPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        finPrice += product.price * product.count;
    }
    // console.log(finPrice);
    return finPrice;
}




const name = 'u'
let final = 0;

if (name === 'Alex') {
    alexCart = [{
        name: 'Арбуз',
        price: 100,
        count: 1,
    }]
    const debt = 150;
    final = calFinPrice(alexCart)
    final += debt;

} else if (name === 'John') {
    johnCart = [{
        name: 'Хлеб',
        price: 10,
        count: 2,
    }]
    const debt = 50;
    final = calFinPrice(johnCart)
    final += debt;

} else {
    final = calFinPrice(userCart)
    userCart = [{
        name: 'Молоко',
        price: 50,
        count: 1,
    }]
}

console.log(final);