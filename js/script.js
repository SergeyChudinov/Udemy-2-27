'use strict';

const movieDB = {
    promo__interactiveList: document.querySelector('.promo__interactive-list'),
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    drawElements: function() {
        this.promo__interactiveList.innerHTML = '';
        this.movies.sort();
        this.movies.forEach((el, i) => {
            this.promo__interactiveList.innerHTML += this.getMarkup(el, i);
        }); 
        abc();       
    },
    getMarkup: function(element, index) {
        return `
            <li class="promo__interactive-item">${index + 1}. ${element}
                <div class="delete"></div>
            </li>
        `
    }
};
const promo__adv = document.querySelector('.promo__adv');
promo__adv.remove();

const promo__genre = document.querySelector('.promo__genre');
promo__genre.textContent = 'драма';

const promo__bg = document.querySelector('.promo__bg');
promo__bg.style.backgroundImage   = "url('img/bg.jpg')";


movieDB.drawElements();


const button = document.querySelector('.add');
button.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.querySelector('form input[type="checkbox"]').checked) {
        console.log('Добавляем любимый фильм');
    }
    const input = document.querySelector('.adding__input');
    if (!input.value) {
        return;
    };
    const array = input.value.split('');
    if (array.length > 21) {
        let num = array.length - 21;
        array.splice(21, num);
        array.push('...')
    };
    const newInputValue = array.join('');
    movieDB.movies.push(newInputValue);
    movieDB.drawElements();
    event.target.reset();  // input.value = '';
})

// document.querySelector('.promo__interactive-list').addEventListener('click', event => {
//     if (!event.target.closest('.delete')) {
//         return;
//     }
//     event.preventDefault();
//     let itemFilm = event.target.parentElement.textContent;
//     const arrayOfFilm = (itemFilm.match(/([а-яё]+(.+)?)+|([a-z]+(.+)?)/ig))[0];
//     // const stringOfFilm = arrayOfFilm.join(' '); 
//     const indexMovie = movieDB.movies.indexOf(arrayOfFilm);
//     movieDB.movies.splice(indexMovie, 1);
//     movieDB.drawElements();     
// })

function abc() {
    document.querySelectorAll('.delete').forEach((el, i) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            // el.parentElement.remove();
            movieDB.movies.splice(i, 1);
            movieDB.drawElements();    
        })
    })
}