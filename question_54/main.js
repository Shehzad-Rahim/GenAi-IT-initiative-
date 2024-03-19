"use strict";
function ObjWithDynamicKey(key, value) {
    let dynamicObj = {};
    dynamicObj[key] = value;
    return dynamicObj;
}
let userInterface = ObjWithDynamicKey("them", "Dark");
console.log(userInterface);
