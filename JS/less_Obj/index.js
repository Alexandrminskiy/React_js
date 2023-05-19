// Тип данных Object
// Объекты {}

// const test = {
//     key1: 'Test',
//     key2: 'Test2',
//     key3: ['Test3', 'Test4'],
// };
// console.log(test);

const cart = {
    money: {
        sum: 500,
        currency: 'Rub',
        allowCurrency: ['Рубли', 'Евро'],
        discount: {
            hasDiscount: true,
            discountValue: 30,
        },
    },    
    items: [{
        title: 'Ручку',
        count: 2,
        price: 100 
    }, {
        title: 'Книгу',
        count: 300,
        price: 1
    }],
};
console.log(cart.money.discount.hasDiscount)

