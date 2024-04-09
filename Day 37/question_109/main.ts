const currentTime = new Date();

if(currentTime.getHours() < 12){
    console.log('Good morning');
    
} else if(currentTime.getHours() > 12 ){
    console.log('Good AFternoon');
    
} else if (currentTime.getHours() < 8) {
    console.log('Good evening');
    
}else{
    console.log('Good night');
    
}