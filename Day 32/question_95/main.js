"use strict";
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
;
const numbers = [1, 3, 5, 12, 15, 18, 25];
console.log(filterGreaterThanTen(numbers));
