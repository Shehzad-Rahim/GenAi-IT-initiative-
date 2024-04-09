"use strict";
function ageCategory(age) {
    if (age < 13) {
        return "You are a Child";
    }
    else if (age <= 19) {
        return "You are a Teenager";
    }
    else {
        return "You are an Adult";
    }
}
console.log(ageCategory(5));
console.log(ageCategory(17));
console.log(ageCategory(22));
