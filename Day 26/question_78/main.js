"use strict";
function squareDeclaration(number) {
    return number * number;
}
;
const squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(10));
console.log(squareExpression(10));
