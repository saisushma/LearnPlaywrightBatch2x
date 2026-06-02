
const greet = function(name1){
    return name1;
}

let result = greet("Pramod");
console.log(result);

//arrow functn 
const greet2 = (name1) => name1;
let r2 = greet2("sai");
console.log(r2);

const doubleIt = n =>n*2;
console.log(doubleIt(10));

const printIT = name =>console.log(name);
printIT("DUtta");

function say(){
    console.log("Hello, world!");
}

const say1 = () => console.log("Hello, world!");
const say2 = () => "Hi";

const greet =(name) => {
    const message = `Hello, ${name}!`;
    return message;
}