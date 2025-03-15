// 1

const btn = document.getElementById("btn")
const text = document.getElementById('text')
const square = document.getElementById("square")
let colorSquare = 0

const logger1 = function (event) {
    colorSquare = event.target.value
}

const logger2 = function () {
    square.style.backgroundColor = colorSquare
}

text.addEventListener('input', logger1)
btn.addEventListener("click", logger2)

// 2

const e_btn = document.getElementById("e_btn")
e_btn.style.display = "none"

// 3

const range = document.getElementById("range")
const circle = document.getElementById("circle")
let rangeValue = 0

const logger3 = function (event) {
    rangeValue = event.target.value

    circle.style.width = rangeValue * 0.01 * 150 + "px";
    circle.style.height = rangeValue * 0.01 * 150 + "px";

}

range.addEventListener('input', logger3)
