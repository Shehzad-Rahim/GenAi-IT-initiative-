"use strict";
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
