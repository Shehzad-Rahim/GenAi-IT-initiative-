"use strict";
function favHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I love to ${hobby}`);
    });
}
;
favHobbies("Code at Night", "Read Books", "Travel");
favHobbies("Go for a walk", "Operate machinary", "Listen Music");
