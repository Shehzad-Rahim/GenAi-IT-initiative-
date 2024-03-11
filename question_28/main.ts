
// QUESTION NO.28

let age : number = 18;

if(age < 15){
    console.log(`You are not '18' years old`);

} else if(age > 15 && age <18 ){
    console.log(`You are close to '18' but not '18}'`);
    
} else if(age == 18){
    console.log(`Congrats You are '${age}'`);

} else if (age > 18 && age <= 20) {
    console.log(`You just passed '18'`);
    
}else{
    console.log(`You are older than '18'`);
    
}