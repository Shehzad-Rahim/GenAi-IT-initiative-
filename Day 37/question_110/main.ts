function assignGrade(score:number):string{
    if (score >= 90) {
        return "A Grade"
    }else if (score >=80) {
        return "B Grade"
    }else if (score >= 70){
        return "C Grade"
    }else if (score >= 60){
        return "D Grade"
    }else{
        return "F"
    }
}
console.log('Shehzad got',assignGrade(82));
console.log('Salman got',assignGrade(68));
