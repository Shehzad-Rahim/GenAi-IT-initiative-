let magicians : string[] = ["Zain","Azhar","Saleem"];

function showMagicians(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
        
    });
}

// showMagicians(magicians);

function make_great(magicians: string[]): string[]{
    let greatMagicians:string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} 'The Great'`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());

console.log("Original magicians:");
showMagicians(magicians);
console.log("Great magicians:");
showMagicians(greatMagicians)


