"use strict";
// original function 
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(10, 15));
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(8, 9));
