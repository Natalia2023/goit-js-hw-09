// Імпортуємо залежності для плагіну вибору дати та бібліотеки для сповіщень:
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
// Знаходимо необхідні DOM-елементи за допомогою querySelector та зберігаємо їх у змінних:
const refs = {
    input: document.querySelector('#datetime-picker'),
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    mins: document.querySelector('span[data-minutes]'),
    secs: document.querySelector('span[data-seconds]'),
};

let intervalId = null;
// Вимикаємо кнопку старту до тих пір, доки користувач не вибере дату:
refs.start.disabled = true;
// Налаштовуємо параметри для плагіну вибору дати:
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            refs.start.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        }
        if (selectedDates[0] > new Date()) {
            refs.start.disabled = false;
        }

        refs.start.addEventListener('click', () => {
            intervalId = setInterval(() => {
                const differenceInTime = selectedDates[0] - new Date();

                if (differenceInTime < 1000) {
                clearInterval(intervalId);
                }
                const result = convertMs(differenceInTime);
                viewOfTimer(result);
            }, 1000);
        });
    },
};

flatpickr('#datetime-picker', options);
// Функція, яка оновлює відображення часу:
function viewOfTimer({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${minutes}`;
    refs.secs.textContent = `${seconds}`;
}
// Функція для додавання ведучого нуля до числа:
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
// Функція для конвертування мілісекунд у об'єкт, 
// який містить кількість днів, годин, хвилин та секунд
function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

















// refs.start.disabled = true;
// Ця стрічка коду 
// встановлює властивість
// disabled у true для елементу з ідентифікатором refs.start. Якщо цей елемент є
// посиланням на HTML-елемент, то властивість disabled вимикає можливість кліку на 
// посиланні та його активності, тобто робить його неактивним.
// Таким чином, цей код 
// може використовуватися для заборони кліку на
//  посиланні до того моменту, поки не будуть виконані певні дії або 
//  поки не настане певний час. Наприклад, може бути використаний для
//   запобігання подвійного натискання на кнопку та уникнення небажаних 
// наслідків в результаті такого подвійного кліку.



// enableTime: встановлює, що календар містить можливість вибору часу.
// time_24hr: встановлює, що годинник відображається у 24-годинному форматі.
// defaultDate: встановлює поточну дату та час як значення за замовчуванням.
// minuteIncrement: встановлює крок збільшення часових інтервалів для вибору часу.
// onClose: функція, яка буде викликана при закритті календаря та годинника та обробляє вибрану дату та час.



// Функція використовує метод padStart, який додає символ
//  (в даному випадку, нуль) до початку рядка до тих пір, 
//  поки рядок не досягне заданої довжини. Перший параметр методу вказує,
//   якої довжини має бути результуючий рядок, а другий параметр - який символ 
//   потрібно додати до початку рядка. У даному випадку, 
// другий параметр - це рядок з одним символом "0".