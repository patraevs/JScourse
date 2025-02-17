'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = 69;
let fullPrice
let servicePercentPrice
let allServicePrices
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется ваш проект?")
    screens = prompt("Какие типы экранов нужно разработать?")
    screenPrice = +prompt("Сколько будет стоить данная работа?")

    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?")
    } while (!isNumber(screenPrice))

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        sum += +prompt("Сколько это будет стоить?");
        while (!isNumber(sum)) {
            sum += +prompt("Сколько это будет стоить?")
        }
    }
    return sum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()


showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " рублей. " + " Стоимость разработки сайта " + fullPrice + " рублей.");