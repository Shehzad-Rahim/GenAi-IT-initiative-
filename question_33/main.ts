let numbers : number[] = [1,2,3,4,5,6,7,8,9];

numbers.forEach(number => {
    let suffix
    if(number === 1){
         suffix = "st"
    } else if( number === 2){
        suffix = "nd" 
    } else if( number === 3){
        suffix = "rd"
    } else if ( number >= 4 && number <= 20) {
        suffix = "th"
    }
    console.log(`${number}${suffix}`);
    
})