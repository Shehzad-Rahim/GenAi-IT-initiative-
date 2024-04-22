"use strict";
function fetchData(callback) {
    const error = new Error("Failed to fetch data");
    const data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
        console.log(data);
    }
});
