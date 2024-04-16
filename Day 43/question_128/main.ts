const multiplyPerameters = (...num: number[]) => num.reduce((total, number) => total * number, 1);


console.log(multiplyPerameters(2, 4, 6));
