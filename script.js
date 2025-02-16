'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 69;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
let allServicePrices;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 30000:
            return "Даем скидку в 10%"
            break
        case 30000 > price && price >= 15000:
            return "Даем скидку в 5%"
            break
        case 15000 > price && price >= 0:
            return "Скидка не предусмотрена"
            break
        case price < 0:
            return "Что то пошло не так"
            break
        default:
            return "Не верно ни одно значение"
    }
}

const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}
fullPrice = getFullPrice(screenPrice, allServicePrices)

const getTitle = function (title) {
    return title[0].toUpperCase() + title.slice(1)
}

const getServicePercentPrices = function (fullPrice, servicePercentPrice) {
    return fullPrice - servicePercentPrice
}
servicePercentPrice = getServicePercentPrices(fullPrice, servicePercentPrice);

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)
getServicePercentPrices()

console.log(screens.toLowerCase().split());
console.log(getRollbackMessage(fullPrice));