/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promo__adv = document.querySelector('.promo__adv');
promo__adv.remove();

const promo__genre = document.querySelector('.promo__genre');
promo__genre.textContent = 'драма';

const promo__bg = document.querySelector('.promo__bg');
promo__bg.style.backgroundImage   = "url('img/bg.jpg')";

// const promo__interactiveItem = document.querySelectorAll('.promo__interactive-item');
movieDB.movies.sort();
// promo__interactiveItem.forEach((el, i) => {
//     el.textContent = `${i+1}. ${movieDB.movies[i]}`;
// });

const promo__interactiveList = document.querySelector('.promo__interactive-list');
promo__interactiveList.innerHTML = '';
movieDB.movies.forEach((el, i) => {
    promo__interactiveList.innerHTML += getMarkup(el, i);
})
function getMarkup(element, index) {
    return `
        <li class="promo__interactive-item">${index + 1}. ${element}
            <div class="delete"></div>
        </li>
    `
}