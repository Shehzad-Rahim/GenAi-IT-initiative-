function makeAdder(addValue:number): (number: number) => number {
    return function(number:number): number {
        return number + addValue
    };
}

let addFive = makeAdder(5);
console.log(addFive(10));
