const CHANGE_SWITCH = 1000; //добавляю константу для зміни кольру
let idInterval = null; //створюю змінну для зберігання початкового стану інтервалу

// завантажується, зміна кольору фону ще не відбувається

const btnStart = document.querySelector('button[data-start]');//дістаю кнопки з ДОМ дерева
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStop.disabled = true;//Вимикаю кнопку стоп на початку, оскільки коли сторінка

btnStart.addEventListener('click', onBtnStartChangeColor);//додаю слухачі подій на старт і стоп
btnStop.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
  btnStart.disabled = true;//включаю старт 
  btnStop.disabled = false;//виключаю стоп 

  idInterval = setInterval(() => {//запускаю інтервал кожну сек
    body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_SWITCH);
}

function onBtnStopChangeColor() {
  btnStart.disabled = false;//виключаю старт
  btnStop.disabled = true;//включаю стоп

  clearInterval(idInterval);//зупиняю інтервал
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}