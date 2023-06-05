const div = document.querySelector('element');
// console.log(div.firstElementChild); //Первый элемент
// console.log(div.firstElementChild); //Последний элемент
// console.log(div.children); //Все элементы
// console.log(div.parentNode); //Родитель divа
// console.log(div.nextElementSibling); //Следующий тэг
// console.log(div.previousElementSibling); //Предыдущий тэг

// div.innerHTML = '<button>Привет мир</button>'
// div.textContent = 'Привет Мир2'

const div = document.querySelector('.element');

// diva.remove();
// diva.append('Конец')
// diva.prepend('Начало')

// diva.before('перед тэгом див')
// diva.after('после тэга див')

// const button2 = document.createElement('buttom');
// button2.textContent = 'Кнопка';
// diva.after(button2)

// insertAdjacentHTML:
// beforebegin-begine
// afterbegin-prepend
// beforeend-append
// afterend-after
div.insertAdjacentHTML('afterbegin', `
<ul>
<li>1</li>
<li>2</li>
</ul>
`);

const uli = diva.querySelector('ul');
uli.insertAdjacentElement('beforeend', `
<li>3</li>
`);