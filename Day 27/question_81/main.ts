function logObjProperties(obj:any) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
        
    }
}

console.log({make: "Honda", model: "Civic", year: "2024", color:"Green"});
