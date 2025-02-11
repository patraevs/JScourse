'use strict';

let title = prompt("Как называется ваш проект?");
title = "project";
let screens = prompt("Какие типы экранов нужно разработать?");
screens = "Простые, Сложные, Интерактивные";
let screenPrice = prompt("Сколько будет стоить данная работа?");
screenPrice = 7;
let rollback = 69;
let fullPrice = 300;
let adaptive = confirm("Нужен ли адаптив на сайте?");
adaptive = true;
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice;
servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));
switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break
    case 30000 > fullPrice && fullPrice >= 15000:
        console.log("Даем скидку в 5%");
        break
    case 15000 > fullPrice && fullPrice >= 0:
        console.log("Скидка не предусмотрена");
        break
    case fullPrice < 0:
        console.log("Что то пошло не так");
        break
    default:
        console.log("Не верно ни одно значение");
};
console.log(fullPrice);
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей. " + " Стоимость разработки сайта " + fullPrice + " рублей.");
console.log(screens.toLowerCase().split());
console.log((fullPrice * (rollback / 100)) / (fullPrice / 100) + "%");



