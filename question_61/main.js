"use strict";
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Bike"] = 1] = "Bike";
    vehicleType[vehicleType["Suzuki"] = 2] = "Suzuki";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Car, vehicleType.Bike);
