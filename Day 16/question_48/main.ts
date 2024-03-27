let priceSet1 = [1000, 2000, 2500];
let priceSet2 = [1500, 2300, 3000];

let combinedPrices = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinedPrices);
