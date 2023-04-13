const refs = {
    changeBodyColor: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop'),
}

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', element => {
   
    element.target.setAttribute('disabled', true);
    refs.btnStop.removeAttribute('disabled');

    intervalId = setInterval(() => {
    refs.changeBodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

refs.btnStop.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    refs.btnStart.removeAttribute('disabled');

    clearInterval(intervalId);
});
// Ця строчка JavaScript коду встановлює атрибут "disabled" для елементу, який був спрямований подією (event), що спричинила виклик функції,
//  і встановлює його значення на "true", що робить елемент неактивним.

// Це часто використовується для того, щоб 
// заблокувати можливість взаємодії користувача з
//  елементом на сторінці під час виконання якоїсь 
//  дії, наприклад, при відправці форми або завантаженні даних.