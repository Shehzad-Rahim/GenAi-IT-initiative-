function calculateNumbers(numbers:number[]):number{
    return numbers.reduce((accumulator , current)=> accumulator + current , 0);

}

const numbers : number[] = [1,2,3,4,5];

console.log(calculateNumbers(numbers));
