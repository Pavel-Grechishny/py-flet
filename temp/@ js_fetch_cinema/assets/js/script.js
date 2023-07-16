/*----------------------------------------------------------------|
|                                                                 |
| use apikey = b2289cb6 gpa                                       |
| use apikey = a2b07930 msv                                       |
| use apikey = 260767ce s24                                       |
|                                                                 |
|----------------------------------------------------------------*/
'use strict';

const apikey = 'b2289cb6';
const search = document.querySelector('#search');
let N = 1;


main();


function main(){
    
    downloadСontent(); // загрузка контента по дефолту
    addMoreContent(); // добавить порцию контента если виден спинер

    // показать контент (запрос в строке поиска)
    search.addEventListener('input', () => {
        window.scrollTo(0,0); // возвращаем скрол вверх;
        document.querySelectorAll('.content-item').forEach(art => art.remove()); // удаляем весь отображенный контент
        if (N != 1) N = 1;
        downloadСontent(); // загружаем контент по запросу
        addMoreContent(); // добавляем контент если осталось место
    });

    // показать (скрыть) модальное окно
    document.addEventListener('click', event =>{
        if(event.target.closest('.modal-window .btn-close')) event.target.closest('.modal-window').remove();
        if(event.target.closest('a') || event.target.closest('.modal-front')) return;
        if(event.target.closest('.content-item')) showMoreDetails(event.target.closest('.content-item').dataset.id);
        if(event.target.closest('.modal-window')) event.target.closest('.modal-window').remove();
    });

    window.addEventListener('scroll', addMoreContent); // про скроле добавляем контент
    window.addEventListener('resize', addMoreContent); // про ресайзе добавляем контент

    switchThemeSite(); // переключатель стилей
    removeHalfHeight(); // скрыть банер в шапке
}

// запрос к API
async function requestOMDbApi(url) {
    const response = await fetch(url);
    return response.json();
}

// получает ответ от API и вызывает шаблон постеров
async function downloadСontent() {
    const value = search.value || search.dataset.launch; // значение либо по запросу либо по дефолту
    const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${value}&page=${N++}`
    const response = await requestOMDbApi(url);
    if(!response.Search) return;
    response.Search.forEach(poster => templatePoster(poster));
}

// получает ответ от API и вызывает шаблон модального окна
async function showMoreDetails(itemAttr){
    const url = `http://www.omdbapi.com/?apikey=${apikey}&i=${itemAttr}&plot=full`
    const film = await requestOMDbApi(url);
    templateModal(film);
}

// шаблон постера
function templatePoster(item) {
    const content = document.querySelector('.content-wrapper'),
        template = document.querySelector('template#id-content').content.cloneNode(true),
        poster = template.querySelector('.content-item'),
        image = poster.querySelector('.item-poster>img'),
        link = poster.querySelector('.item-poster>a');
    poster.dataset.id = item.imdbID;
    image.src = item.Poster;
    link.href = `https://www.imdb.com/title/${item.imdbID}/`;
    if (item.Poster === 'N/A'){
        poster.querySelector('.poster-title').textContent = item.Title;
        image.src = './assets/images/default.webp';
    }
    content.append(poster);
}

// шаблон модального окна
function templateModal(item){
    const template = document.querySelector('template#id-modal').content.cloneNode(true);
    const modal = template.querySelector('.modal-window');
    modal.querySelector('.modal-poster>img').src = item.Poster;
    modal.querySelector('.info-title').textContent = item.Title;
    modal.querySelector('.info-rating').textContent = item.imdbRating;
    modal.querySelector('.info-actors').textContent = item.Actors;
    modal.querySelector('.info-director').textContent = item.Director;
    modal.querySelector('.info-plot').textContent = item.Plot;
    modal.querySelector('.info-country').textContent = item.Country;
    modal.querySelector('.info-runtime').textContent = item.Runtime;
    modal.querySelector('.info-year').textContent = item.Year;
    modal.querySelector('.info-genre').textContent = item.Genre;
    modal.querySelector('.btn-action').href = `https://www.imdb.com/title/${item.imdbID}/`;
    if (item.Poster === 'N/A'){
        modal.querySelector('.modal-poster>img').src = './assets/images/default.webp';
    }
    document.body.prepend(modal);
}

// проверить спинер и добавить контент
function addMoreContent(){
    const spiner = document.querySelector('.spiner');
    if(Math.trunc(spiner.getBoundingClientRect().bottom < window.innerHeight)) 
    downloadСontent();
}

// переключить цвет сайта 
function switchThemeSite(){
    const now = new Date();
    const theme = document.querySelector('[data-theme]');
    if(now.getHours() > 8 && now.getHours() < 20) theme.href = 'assets/css/white-theme.css';
}

// скрыть(показать) банер
function removeHalfHeight(){ 
    search.addEventListener('focus', ()=>{
        if(search.value == "") {
            document.querySelector('.baner').classList.remove('half-height');
            document.querySelector('.cheater').classList.remove('high');
        }
    });
    search.addEventListener('blur', ()=>{
        if(search.value == "" ) {
            document.querySelector('.baner').classList.add('half-height');
            document.querySelector('.cheater').classList.add('high')
        }
    });
}