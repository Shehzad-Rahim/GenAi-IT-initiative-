"use strict";
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Hello Shehzad");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
