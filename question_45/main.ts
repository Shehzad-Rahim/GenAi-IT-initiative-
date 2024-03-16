function makeCar (manufacturer: string, model:string , ...options: [string, any][]): object {
    let car:any = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(makeCar("Suzuki","Mehran",["color","white"], ["year", "2012"]));

console.log(makeCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

