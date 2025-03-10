'use strict';

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 69,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()

        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    isString: function (num) {
        return isNaN(num)
    },
    asking: function () {

        do {
            appData.title = prompt("Как называется ваш проект?", "Вёрстка")
        } while (!appData.isString(appData.title))

        for (let i = 0; i < 2; i++) {
            let name

            do {
                name = prompt("Какие типы экранов нужно разработать?", "Простые")
            } while (!appData.isString(name))

            let price = 0

            do {
                price = prompt("Сколько будет стоить данная работа?", "10000")
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let price = 0
            let name

            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "Метрика")
            } while (!appData.isString(name))

            do {
                price = prompt("Сколько это будет стоить?", "1000")
            } while (!appData.isNumber(price))

            appData.services[name] = +price
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
    },
    getRollbackMessage: function (price) {
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
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}

// appData.start()

// const titleLayout = document.getElementsByTagName("h1")
// console.log(titleLayout[0]);

// const buttons = document.getElementsByClassName("handler_btn")
// console.log(buttons);

// const button = document.querySelector(".screen-btn")
// console.log(button);

// const elementsPercent = document.querySelectorAll(".other-items + .percent")
// console.log(elementsPercent);

// const elementsNumber = document.querySelectorAll(".other-items + .number")
// console.log(elementsNumber);

// const input = document.querySelector(".rollback input[type=range]")
// console.log(input);

// const span = document.querySelector(".rollback .range-value")
// console.log(span);

// const allInput = document.getElementsByClassName("total-input")
// console.log(allInput[0]);
// console.log(allInput[1]);
// console.log(allInput[2]);
// console.log(allInput[3]);
// console.log(allInput[4]);

// let allBlock = document.querySelectorAll(".screen")
// console.log(allBlock);

const books = document.querySelectorAll('.book')
const elems = document.getElementsByTagName("li")
const titles = document.getElementsByTagName('h2')


console.log(books);
console.log(elems);
console.log(titles);


books[0].before(books[1])
books[5].after(books[2])
books[3].before(books[4])

const cloneTitle = titles[2].cloneNode(true)
cloneTitle.innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>'
titles[2].replaceWith(cloneTitle);

const marketing = document.querySelectorAll(".adv")
marketing[0].remove()

elems[16].before(elems[8])
elems[9].before(elems[11])
elems[10].before(elems[13])

elems[38].before(elems[45])
elems[42].before(elems[39])
elems[45].before(elems[42])

const newElem = document.createElement('li')
newElem.textContent = "Глава 8: За пределами ES6"
books[2].append(newElem)
elems[56].before(elems[57])