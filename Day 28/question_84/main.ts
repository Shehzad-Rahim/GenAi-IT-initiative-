function replaceJSwithTS(sentence: string):string{
    return sentence.replace(/Javascript/g, "Typescript");
};

console.log(replaceJSwithTS("Javascript is my favourite language"));

