"use strict";
let magicians = ["Zain", "Azhar", "Saleem"];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
showMagicians(magicians);
function Great_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
Great_magicians(magicians);
showMagicians(magicians);
