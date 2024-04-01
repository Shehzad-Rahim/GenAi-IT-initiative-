function replaceBananaWithStrawberry(fruits:string[]):void {
    const index = fruits.indexOf("Banana");
    if( index !== -1) fruits[index] = "Strawberry"
};

let favFruits: string[] = ["Grapes", "Banana", "Cherry", "Guava"];

replaceBananaWithStrawberry(favFruits);

console.log(favFruits);
