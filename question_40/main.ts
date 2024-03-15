function make_album(artist:string, title:string, tracks?:number){
    let album:any = {artist , title};

    if(tracks) {
        album["tracks"]  = tracks
    }
    return album
}

console.log(make_album("Atif Aslam", "Jal Pari"));
console.log(make_album("Ali zafar","Jhoom"));
console.log(make_album("Arijit Singh", "Kabir Singh", 6));


