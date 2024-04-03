function getMyBirthday(month:number, day:number): Date{
    const today = new Date();
    let year = today.getFullYear();
    const birthady = new Date(year , month - 1, day);

    if(birthady < today){
        birthady.setFullYear(year + 1);
    }
    return birthady
};

const myBirthday = getMyBirthday(7,18);
console.log("Your Birthday on", myBirthday.toLocaleDateString());
