// original function for calculating the rectangle area;
function calculateArea(width:number , height: number): number {
    return width * height;
    
}

console.log(calculateArea(10, 15));

// Refactored into an arrow function

let calculateAreaArrow = (width: number, height: number) : number => width * height;

console.log(calculateAreaArrow(8, 9));