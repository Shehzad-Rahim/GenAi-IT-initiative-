"use strict";
let mixedArray = [1, "Laptop", 2, "Mobile", 3, "Car", true];
let stringArray = mixedArray.filter(items => typeof items === "string");
console.log(stringArray);
