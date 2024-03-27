"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Jal Pari"));
console.log(make_album("Ali zafar", "Jhoom"));
console.log(make_album("Arijit Singh", "Kabir Singh", 6));
