"use strict";
const myObject = {
    property: "Value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () => {
            console.log(this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
