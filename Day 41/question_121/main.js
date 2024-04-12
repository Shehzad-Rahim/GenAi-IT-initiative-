"use strict";
for (let a = 1; a <= 10; a++) {
    if (a === 5) {
        console.log(a, ") Break");
        continue;
    }
    console.log(a, ") Hello");
}
