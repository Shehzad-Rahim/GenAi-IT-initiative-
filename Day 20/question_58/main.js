"use strict";
function averegeScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averegeScore(30, 55, 60, 99, 72));
