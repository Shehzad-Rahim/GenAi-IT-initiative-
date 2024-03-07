"use strict";
let favPlaces = ["Germeny", "Australia", "Turkey", "Korea", "NewZealand"];
console.log("Orignal Order", favPlaces);
console.log("Alphabetical Order", [...favPlaces].sort());
console.log("Orignal order", favPlaces);
favPlaces.reverse();
console.log(favPlaces);
favPlaces.reverse().sort();
console.log(favPlaces);
