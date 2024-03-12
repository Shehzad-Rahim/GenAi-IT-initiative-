"use strict";
let current_users = ["admin", "user2", "user3", "user4", "user5"];
let new_users = ["USER6", "User7", "useR8", "admin"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`This ${newUser} is not available please enter a new username`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
