function introduction(name){
    return `Hi, my name is ${name}.`
}
console.log(introduction(`Samip`))

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage(`Samip`,`JavaScript`))

function introductionWithLanguageOptional(name = `Gracie`, language = `JavaScript`){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional())