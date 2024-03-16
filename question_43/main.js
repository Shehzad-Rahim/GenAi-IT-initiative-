"use strict";
let magicians = ["Zain", "Azhar", "Saleem"];
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// showMagicians(magicians);
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} 'The Great'`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians);
// function Great_magicians(magicians: string[]){
//     for(let i = 0; i < magicians.length; i++){
//         magicians[i] = magicians[i] + " The Great."
//     }
// }
// Great_magicians(magicians);
// showMagicians(magicians)
