"use strict";
function makeCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(makeCar("Suzuki", "Mehran", ["color", "white"], ["year", "2012"]));
console.log(makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
