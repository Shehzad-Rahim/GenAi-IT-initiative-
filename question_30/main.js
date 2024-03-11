"use strict";
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log(`Hello ${username} You can acces the admin portal`);
    }
    else {
        console.log(`Sorry ${username} you are an user you are not allowed to access this portal`);
    }
});
