const cookie = document.querySelector('.cookie');
const button = document.querySelector('.button');
const main = document.querySelector('.main');
const mainHidden = document.querySelector('.main-hidden');

cookie.addEventListener('click', function() {
    console.log('clicando')
    main.classList.add('hidden');
    mainHidden.classList.remove('hidden');
});

button.addEventListener('click', function() {
    mainHidden.classList.add('hidden');
    main.classList.remove('hidden');
});