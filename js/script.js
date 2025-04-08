'use strict';

const title = document.getElementsByTagName("h1")[0]
const buttonPlus = document.querySelector(".screen-btn")
const otherItemsPercent = document.querySelectorAll(".other-items + .percent")
const otherItemsNumber = document.querySelectorAll(".other-items + .number")

const inputRange = document.querySelector(".rollback input[type=range]")
const inputRangeValue = document.querySelector(".rollback .range-value")

const startBtn = document.getElementsByClassName("handler_btn")[0]
const resetBtn = document.getElementsByClassName("handler_btn")[1]

const total = document.getElementsByClassName("total-input")[0]
const totalCount = document.getElementsByClassName("total-input")[1]
const totalCountOther = document.getElementsByClassName("total-input")[2]
const fullTotalCount = document.getElementsByClassName("total-input")[3]
const totalCountRollback = document.getElementsByClassName("total-input")[4]

let screens = document.querySelectorAll(".screen")

let inputWindow = document.querySelector("input")
let selectWindow = document.querySelector('select')

const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 69,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    screensNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {

        this.addTitle()
        startBtn.addEventListener('click', this.start)
        buttonPlus.addEventListener('click', this.addScreenBlock)
        inputRange.addEventListener('input', this.rollbackValue)
        inputWindow.addEventListener('input', this.checkValue)
        selectWindow.addEventListener('input', this.checkValue)
        startBtn.disabled = true;
        resetBtn.addEventListener('click', this.reset)
    },
    addTitle: function () {
        document.title = title.textContent
    },
    rollbackValue: function (event) {
        inputRangeValue.textContent = +event.target.value + "%"
        this.rollback = +event.target.value
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        appData.showResult()
        appData.block()
        // appData.logger()
    },

    reset: function () {

        screens = document.querySelectorAll(".screen");
        if (screens.length > 1) {
            for (let i = screens.length - 1; i > 0; i--) {
                screens[i].remove();
            }
        }

        startBtn.style.display = "block"
        resetBtn.style.display = "none"
        inputWindow.disabled = false
        selectWindow.disabled = false
        inputWindow.value = ''
        selectWindow.value = ''
        total.value = ''
        totalCount.value = ''
        totalCountOther.value = ''
        fullTotalCount.value = ''
        totalCountRollback.value = ''
        appData.screenPrice = 0
        appData.servicePricesPercent = 0
        appData.servicePricesNumber = 0
        appData.fullPrice = 0
        appData.servicePercentPrice = 0
        appData.screensNumber = 0
        appData.servicesPercent = {}
        appData.servicesNumber = {}
        appData.screens = []
    },
    showResult: function () {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice
        totalCount.value = this.screensNumber
    },
    checkValue: function () {
        let isValidate = true
        screens.forEach((item) => {
            const input = item.querySelector("input")
            const select = item.querySelector('select')
            this.count = input.value
            if (!input.value || !select.value) {
                isValidate = false
            }
        })

        if (isValidate) {
            startBtn.disabled = false;
        } else {
            startBtn.disabled = true;
        }
    },
    addScreens: function () {
        screens = document.querySelectorAll(".screen")

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })

    },
    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }

        })

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }

        })
    },
    addScreenBlock: function () {

        const cloneScreen = screens[0].cloneNode(true)

        const input = cloneScreen.querySelector("input")
        const select = cloneScreen.querySelector('select')


        input.value = ''

        select.value = ''

        input.addEventListener('input', appData.checkValue)
        select.addEventListener('input', appData.checkValue)

        screens[screens.length - 1].after(cloneScreen)

        screens = document.querySelectorAll(".screen")
        appData.checkValue()
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
        }

        for (let screen of this.screens) {
            this.screensNumber += +screen.count
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }
        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (+this.rollback / 100))
    },

    block: function () {
        screens = document.querySelectorAll(".screen")

        screens.forEach((screen) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            input.disabled = true;
            select.disabled = true;
        })

        startBtn.style.display = "none";
        resetBtn.style.display = "block";
    },
    logger: function () {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
    }
}

appData.init()