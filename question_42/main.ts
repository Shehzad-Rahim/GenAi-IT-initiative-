let magicians : string[] = ["Zain","Azhar","Saleem"];

function showMagicians(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
        
    });
}
showMagicians(magicians);


function Great_magicians(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " The Great."
    }
}

Great_magicians(magicians);
showMagicians(magicians)