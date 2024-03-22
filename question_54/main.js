"use strict";
function ObjWithDynamicKey(key, value) {
    let dynamicObj = {};
    dynamicObj[key] = value;
    return dynamicObj;
}
let userInterface = ObjWithDynamicKey("them", "dark");
console.log(userInterface);
