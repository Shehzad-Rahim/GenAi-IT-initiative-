"use strict";
function getRandomColor() {
    const color = '#' + Math.floor(Math.random() * 0xffffff).toString(20).padStart(6, '0');
    return color;
}
console.log(getRandomColor());
