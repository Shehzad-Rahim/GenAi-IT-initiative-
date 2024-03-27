"use strict";
function printNumbersWithLet() {
    for (let a = 1; a <= 8; a++) {
        // console.log(a);
        if (a == 1) {
            console.log(a + ") Today is sunday");
        }
        else if (a == 2) {
            console.log(a + ") Today is Monday");
        }
        else if (a == 3) {
            console.log(a + ") Today is Tuesday");
        }
        else if (a == 4) {
            console.log(a + ") Today is Wednesday");
        }
        else if (a == 5) {
            console.log(a + ") Today is Thursday");
        }
        else if (a == 6) {
            console.log(a + ") Today is Friday");
        }
        else if (a == 7) {
            console.log(a + ") Today is Saturday");
        }
        else {
            console.log("There are only 7 days in a week");
        }
    }
}
printNumbersWithLet();
