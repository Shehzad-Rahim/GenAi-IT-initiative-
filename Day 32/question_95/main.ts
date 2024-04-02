function filterGreaterThanTen(numbers:number[]):number[]{
    return numbers.filter(number => number > 10);
};

const numbers : number[] = [1,3,5,12,15,18,25];

console.log(filterGreaterThanTen(numbers));
