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
            appData.title = prompt("Как называется ваш проект?",)
        } while (!appData.isString(appData.title))

        for (let i = 0; i < 2; i++) {
            let name

            do {
                name = prompt("Какие типы экранов нужно разработать?",)
            } while (!appData.isString(name))

            let price = 0

            do {
                price = prompt("Сколько будет стоить данная работа?", "5000")
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let price = 0
            let name

            do {
                name = prompt("Какой дополнительный тип услуги нужен?",)
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

appData.start()

