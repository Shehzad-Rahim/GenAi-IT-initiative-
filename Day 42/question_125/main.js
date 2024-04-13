"use strict";
const rectangle = {
    length: 6,
    width: 7,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
