const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

//открывает при клике на на кнопку
// cartButton.addEventListener("click", function (event)  {
//  modal.classList.add('is-open');

// });

// // Закрывает при клике на крестик
// close.addEventListener("click", function (event)  {
//  modal.classList.remove('is-open');

// });

// сокращение функции:

// создаем однотипную функцию 

function toggleModal(){
 modal.classList.toggle('is-open');
}
//срабатываение фунции по клике на тот или иной объект
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

//инициализация wow.min.js
new WOW().init();


