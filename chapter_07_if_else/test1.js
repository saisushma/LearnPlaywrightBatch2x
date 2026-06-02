function isValidJsBasicsIdentifier(name) {
    let reservedWords = ["let", "const", "var", "if", "else", "for", "while", "function", "return"];
    let identifierPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    if (reservedWords.includes(name)) {
        return false;
    }

    return identifierPattern.test(name);
}

console.log(isValidJsBasicsIdentifier("loginButton"));
console.log(isValidJsBasicsIdentifier("$submit"));
console.log(isValidJsBasicsIdentifier("1login"));
console.log(isValidJsBasicsIdentifier("let"));
