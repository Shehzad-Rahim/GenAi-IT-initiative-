function swapValue(){
    let a = 10;
    let b = 20

    console.log("Before swap a = :", a , "b = :", b);
    
    let temp = a;
    a = b
    b = temp
    console.log("After swap a = :", a , "b = :", b);
};

swapValue();