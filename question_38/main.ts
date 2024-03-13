function describe_city(city:string, country:string = "Pakistan"){
    console.log(`${city} is the most popular city of ${country}`);
    
}

describe_city("Karach");
describe_city("Islamabad");
describe_city("Mumbai", "India")