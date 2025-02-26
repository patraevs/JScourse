'use strict';

let random = Math.floor(Math.random() * 101);

function one(x) {
    function two() {
        const a = prompt("Угадай число от 1 до 100")
        const isNumber = function (a) {
            return !isNaN(parseInt(a)) && isFinite(a)
        }
        if (a === null) {
            alert("Игра окончена");
            return
        }
        if (a > x) {
            alert("Загаданное число меньше");
            two()
        }
        if (a < x) {
            alert("Загаданное число больше");
            two()
        }
        if (!isNumber(a)) {
            alert("Введи число!");
            two()
        }
        if (a == x) {
            alert("Поздравляю, Вы угадали!!!");
            return
        }
    }

    two()
}

one(random)
