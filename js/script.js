'use strict';

// Восстановить порядок книг.
const collections = document.querySelectorAll('.books'),
  books = document.querySelectorAll('.book');

collections[0].prepend(books[1]); // вставляем елемент в начало родителя
books[0].after(books[2]);
books[4].after(books[3]);
collections[0].append(books[2]);

// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let wrongTitle = books[4].querySelector('a');
wrongTitle.textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
const adv = document.querySelector('.adv');
adv.remove();

// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
let book2 = books[0];
let titlesBook2 = book2.querySelectorAll('li');

titlesBook2[10].before(titlesBook2[2]);
titlesBook2[9].before(titlesBook2[7]);
titlesBook2[8].after(titlesBook2[4]);
titlesBook2[4].after(titlesBook2[5]);

let book5 = books[5];
let titlesBook5 = book5.querySelectorAll('li');

titlesBook5[1].after(titlesBook5[9]);
titlesBook5[4].after(titlesBook5[2]);
titlesBook5[8].before(titlesBook5[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let titlesBook6 = books[2].querySelectorAll('li'),
  newElem = document.createElement('li');

newElem.textContent = 'Глава 8: За пределами ES6';
titlesBook6[9].before(newElem);

