"use strict";
function makeAdder(addValue) {
    return function (number) {
        return number + addValue;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
