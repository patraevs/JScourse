'use strict';

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 69,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: "",
    service2: "",
    rollbackMessage: "",
    start: function () {
        this.asking()
        this.allServicePrices = this.getAllServicePrices()
        this.fullPrice = this.getFullPrice()
        this.title = this.getTitle()
        this.servicePercentPrice = this.getServicePercentPrices()
        this.rollbackMessage = this.getRollbackMessage()
        this.logger()
    },
    logger: function () {
        for (let key in this) {
            console.log("Ключ:" + key + " " + "Значение:" + this[key]);
        }
    },
    asking: function () {
        this.title = prompt("Как называется ваш проект?")
        this.screens = prompt("Какие типы экранов нужно разработать?")
        this.screenPrice = +prompt("Сколько будет стоить данная работа?")
        do {
            this.screenPrice = +prompt("Сколько будет стоить данная работа?")
        } while (!this.isNumber(this.screenPrice))
        this.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getAllServicePrices: function () {
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                this.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i === 1) {
                this.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
            this.allServicePrices += +prompt("Сколько это будет стоить?");
            while (!this.isNumber(this.allServicePrices)) {
                this.allServicePrices += +prompt("Сколько это будет стоить?")
            }
        }
        return this.allServicePrices
    },
    getFullPrice: function () {
        return this.screenPrice + this.allServicePrices
    },
    getTitle: function () {
        return this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase()
    },
    getServicePercentPrices: function () {
        return this.fullPrice - (this.fullPrice * (this.rollback / 100))
    },
    getRollbackMessage: function () {
        switch (true) {
            case this.fullPrice >= 30000:
                return "Даем скидку в 10%"
                break
            case 30000 > this.fullPrice && this.fullPrice >= 15000:
                return "Даем скидку в 5%"
                break
            case 15000 > this.fullPrice && this.fullPrice >= 0:
                return "Скидка не предусмотрена"
                break
            case this.fullPrice < 0:
                return "Что то пошло не так"
                break
            default:
                return "Не верно ни одно значение"
        }
    }
}

appData.start()

