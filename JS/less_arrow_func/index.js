// Стрелочные функции
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

const createProduct = (name, price, count) => {
	if (name === '') {
		name = 'Неизвестный продукт';
		console.log('Вы задали неправильное имя продукта');
	}
	if (typeof price !== 'number') {
		price = 0;
		console.log('Вы задали неправильную');
	}
	if (typeof count !== 'number') {
		count = 0;
		console.log('Вы задали не правильное количество');
	}
	return {
		name: name,
		price: price,
		count: count
	};
}

const calFinPrice = (cart, callback) => {
	setTimeout(() => {
		let finPrice = 0;
		for (let i = 0; i < cart.length; i++) {
			const product = cart[i];
			finPrice += product.price * product.count;
		}
		callback(finPrice);
	}, 1000);
}




const name = 'Alex'
let final = 0;

if (name === 'Alex') {
	alexCart = [{
		name: 'Арбуз',
		price: 100,
		count: 1,
	}]
	const debt = 150;
	calFinPrice(alexCart, (price) => {
		console.log('Финальная цена:', price + debt);
	})

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

// console.log(final);

// function add (a, b) {
// 	return a + b;
// }

// const add = (a,b) => {
// 	return a + b;
// }

// const add = (a, b) => a + b;

const add = a => a + 5;

// const add = (a,b) => {
// 	console.log('test');
// 	return a + b;
// }

console.log(add(5)); 