let zodiac = ['овен','телец','близнецы','рак','лев','дева','весы','скорпион','стрелец','козерог','водолей','рыбы'];
let images = [
    'img/31-31.jpg',
    'img/31-33.jpg',
    'img/31-35.jpg',
    'img/31-36.jpg',
    'img/31-39.jpg',
    'img/31-41.jpg',
    'img/31-42.jpg',
    'img/31-43.jpg',
    'img/31-44.jpg',
    'img/31-44 (2).jpg',
    'img/31-45.jpg',
    'img/31-46.jpg',
    'img/31-47.jpg',
    'img/31-48.jpg',
    'img/31-48 (2).jpg',
    'img/31-49.jpg',
    'img/31-50.jpg',
    'img/31-51.jpg',
    'img/31-51 (2).jpg',
    'img/31-52.jpg',
    'img/31-53.jpg',
    'img/31-54.jpg',
    'img/31-54 (2).jpg',
    'img/31-55.jpg',
    'img/31-56.jpg',
    'img/31-57.jpg',
    'img/31-57 (2).jpg',
    'img/31-58.jpg',
    'img/31-59.jpg',
    'img/32-00.jpg',
];
let titles = [
    'Пицца "Маргарита" и Пино Гриджо',
    'Паста болоньезе и Монтепульчано д`Абруццо',
    'Ризотто и Кортезе (Гави)',
    'Паэлья и Темпранильо (Риоха)',
    'Каре ягнёнка и Шираз',
    'Стейк по-флорентийски и Брунелло ди Монтальчино',
    'Ростбиф и правобережное Бордо',
    'Жареная картошка с грибами и Вионье',
    'Утка по-пекински и Дольчетто',
    'Дорада на пару и Шампанское',
    'Тартар из тунца и Гевюрцтраминера',
    'Варёные или жареные креветки и Шардоне (Шабли)',
    'Морские гребешки и игристое брют',
    'Устрицы и Мелонь де Бургонь (Мюскаде)',
    'Крем-суп из спаржи с картофелем и чёрным трюфелем и белая Долина Роны из Марсанна и Руссанна',
    'Грибы, томлённые в сливочном соусе и Пино Нуар',
    'Овощная лазанья и красное из Сент-Эмильона',
    'Рататуй с полентой и Розе из Прованса',
    'Киш со шпинатом и игристое брют',
    'Запечённый чизкейк с вишнёвым сорбетом и Речото делла Вальполичелла',
    'Торт "Шварцвальд" и Портвейн LBV',
    'Брауни и Мускат пасcито ди пантеллерия',
    'Ассорти из французских сыров и эльзасский Рислинг',
    'Ассорти из сыров с голубой плесенью и Сотерн',
    'Роллы "Филадельфия" и Розе д`Анжу',
    'Свежий инжир с голубым сыром и прошутто и Вердехо',
    'Гаспачо и Херес Фино',
    'Индейка в сметанном соусе и Совиньон Блан (Сансер)',
    'Тушёное рагу из говядины и Кьянти Классико',
    'Полента с Пармезаном и Пино Бьянко',
];
let title = document.querySelector('.main__title');
let input = document.querySelector('.header__input');
let error = document.querySelector('.header__error');
let header = document.querySelector('.header');
let space = 0;
let button = document.querySelector('.main__button');
let main = document.querySelector('.main');
let img = document.querySelector('.main__img');
let spin = 1;

function next(){
    for (let symbol in zodiac){
        if (input.value.toLowerCase() === zodiac[symbol]){
            space += 1;
        }
    }
    if (space !== 1){
        return error.classList.remove('hidden');
    }
    header.classList.add('by');
    function hid(){
        header.classList.add('hidden');
        main.classList.remove('hidden');
        main.classList.add('hi');
    }
    window.setTimeout(hid, 700);
    loop();
}

function stop(){
    spin += 1;
    if (spin % 2 === 0){
        return button.innerHTML = 'Повторить';
    }
    button.innerHTML = 'Остановить';
    loop();
}

let iter = 0;
function loop(){
    setTimeout(see, 100);
}
function see(){
    title.innerHTML = titles[iter];
    img.setAttribute('style', `background-image: url('${images[iter]}')`);
    iter += 1;
    if (iter === 30){
        iter = 0;
    }
    if (spin % 2 !== 0){
        loop()
    }
}
