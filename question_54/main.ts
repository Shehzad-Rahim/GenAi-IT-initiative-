function ObjWithDynamicKey(key: string, value: string){
    let dynamicObj :any = {};

    dynamicObj[key] = value;
    return dynamicObj
}

let userInterface = ObjWithDynamicKey("them", "dark")

console.log(userInterface);
