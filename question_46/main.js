"use strict";
let laptop = {
    brand: "Lenovo",
    model: "Thinkpad",
    year: 2012,
    describe: function () {
        console.log(`I have a ${this.brand} Laptop, its model is ${this.model} and it is manufacured in ${this.year}`);
    }
};
laptop.describe();
