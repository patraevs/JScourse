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

        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('input', appData.rollbackValue)
        inputWindow.addEventListener('input', appData.checkValue)
        selectWindow.addEventListener('input', appData.checkValue)
        startBtn.disabled = true;
    },
    addTitle: function () {
        document.title = title.textContent
    },
    rollbackValue: function (event) {
        inputRangeValue.textContent = +event.target.value + "%"
        appData.rollback = +event.target.value
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
        totalCount.value = appData.screensNumber
    },
    checkValue: function () {
        let isValidate = true
        screens.forEach(function (item) {
            const input = item.querySelector("input")
            const select = item.querySelector('select')
            appData.count = input.value
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

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }

        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
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
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let screen of appData.screens) {
            appData.screensNumber += +screen.count
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (+appData.rollback / 100))
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}

appData.init()