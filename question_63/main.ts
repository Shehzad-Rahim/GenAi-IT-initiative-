type Shape = {
    shape : "circle" | "rectangle";
    radius? : number;
    height? : number;
    width? : number;
};

let circle : Shape = {
    shape: "circle",
    radius: 10
};

let rectangle : Shape = {
    shape : "rectangle",
    height: 30,
    width: 20
}

console.log(circle);
console.log(rectangle);
