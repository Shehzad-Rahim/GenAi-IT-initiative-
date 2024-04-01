"use strict";
function replaceBananaWithStrawberry(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Strawberry";
}
;
let favFruits = ["Grapes", "Banana", "Cherry", "Guava"];
replaceBananaWithStrawberry(favFruits);
console.log(favFruits);
