'use strict';

// const DomElement = function (selector, height, width, bg, fontSize) {
//     this.selector = selector;
//     this.height = height;
//     this.width = width;
//     this.bg = bg;
//     this.fontSize = fontSize;
// }

// DomElement.prototype.createElement = function () {
//     let element;
//     if (this.selector.startsWith('.')) {
//         element = document.createElement('div');
//         element.className = this.selector.slice(1);
//     } else if (this.selector.startsWith('#')) {
//         element = document.createElement('p');
//         element.id = this.selector.slice(1);
//     } else {
//         console.error("Invalid selector");
//         return;
//     }

//     element.style.height = `${this.height}px`;
//     element.style.width = `${this.width}px`;
//     element.style.background = this.bg;
//     element.style.fontSize = `${this.fontSize}px`;
//     element.textContent = 'Любой текст';

//     document.body.appendChild(element);
// }


// const newElement = new DomElement('.block', 100, 200, 'red', 16);
// newElement.createElement();
// console.log(newElement);

// const newElementId = new DomElement('#best', 150, 300, 'blue', 20);
// newElementId.createElement();

// 1) Два класса, First и Second, Second наследует от First .

// 2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".

// 3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First,
//  а потом сразу печатал в консоль "А я наследуемый метод!"


class First {
    hello() {
        console.log(`Привет я метод родителя!`)
    }
}

class Second extends First {
    hello2() {
        super.hello()
        console.log("А я наследуемый метод!")
    }
}

const dev = new Second()
dev.hello2()