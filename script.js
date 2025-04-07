'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function () {
    let element;
    if (this.selector.startsWith('.')) {
        element = document.createElement('div');
        element.className = this.selector.slice(1);
    } else if (this.selector.startsWith('#')) {
        element = document.createElement('p');
        element.id = this.selector.slice(1);
    }

    element.style.height = `${this.height}px`;
    element.style.width = `${this.width}px`;
    element.style.background = this.bg;
    element.style.fontSize = `${this.fontSize}px`;
    element.textContent = 'Любой текст';

    document.body.appendChild(element);
}


const newElement = new DomElement('.block', 100, 200, 'red', 16);
newElement.createElement();

const newElementId = new DomElement('#best', 150, 300, 'blue', 20);
newElementId.createElement();
