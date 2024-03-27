let blockLet = "Visible inside the block";
const blockConst = "Also visible inside the block";

console.log(blockLet);
console.log(blockConst);

try {
    console.log(blockLet);
} catch (error){
    console.log("`Blocklet` not accessible outside the block");
}
try {
    console.log(blockConst);
} catch (error){
   console.log("`Blockconst` not accessible outside the block");    
}