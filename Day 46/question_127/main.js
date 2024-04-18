"use strict";
const traditionalFunction = function (a, b) {
    return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(10, 20));
console.log(arrowFunction(10, 20));
