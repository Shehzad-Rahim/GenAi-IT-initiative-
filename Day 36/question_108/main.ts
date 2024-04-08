function areStringEqualsIgnoreCase(str1:string, str2:string):boolean{

    return str1.toLowerCase() === str2.toLowerCase()

};


console.log(areStringEqualsIgnoreCase('shehzad', 'ShEhzaD'));
console.log(areStringEqualsIgnoreCase('rahim', 'raheems'));
