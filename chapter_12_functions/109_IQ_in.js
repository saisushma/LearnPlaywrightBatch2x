
function logtest(name){
    console.log(name);
    //no return statement
}
let result = logtest("Pramod");
console.log(result); //undefined


greet("Alice");

function greet(name){
    return `Hello, ${name}!`;
} //not undefined as function declaration is hoisted and can be called before its definition


sayHi("Bob");

const sayHi = function(name){
    return `Hi, ${name}!`;
}; //this will throw an error because sayHi is a function expression and is not hoisted like function declarations. It cannot be called before it is defined.