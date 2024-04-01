function removeLasetFruit<T>(fruits: T[]): T | undefined{
    return fruits.pop();
};

console.log();

let favFruits: string[] = ["Grapes", "Strawberry", "Cherry", "Guava"];

console.log(`You have removed "${removeLasetFruit(favFruits)}"`);

console.log(favFruits);

