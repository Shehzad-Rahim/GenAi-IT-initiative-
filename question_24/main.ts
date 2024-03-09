// QUESTION NO.24

console.log("String equality comparison");

console.log("Shehzad" == "Shehzad"); // True
console.log("Shehzad" != "Shehzad"); //False


console.log("Lowercase Uppercase Function");
console.log("LENOVO".toLowerCase() == "lenovo"); //True
console.log("lenovo".toUpperCase() == "lenovo");// False


console.log("Numerical Test");
console.log(6 > 3); //True
console.log(10 < 9);// False


console.log(" Test with 'And' and 'Or' Operators");
console.log(false && true); // False // both values should be true
console.log(false || true); // True // either first or second value should be true


// TEST WHETHER AN ITEM IS IN ARRAY
let freinds = ["Amjad","Nizam","Yaseen"];
console.log("Is Nizam in my friendlist ?");
console.log(freinds.includes("Nizam")); // True

// TEST WHETHER AN ITEM IS NOT IN ARRAY 
console.log("Is Zubair not in my friendlist");
console.log(!freinds.includes("Zubair")); // True

