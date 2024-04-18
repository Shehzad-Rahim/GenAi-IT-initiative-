"use strict";
const person = {
    name: "Shehzad",
    age: 22,
    city: "karachi",
};
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString);
