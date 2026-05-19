
//the core difference

// === strict equality operator - checks both value and type . No conversion happens
// == loose equality operator - checks only value. after converting both sides to same type(type coercion)


//number == string

console.log (5 == "5"); //true - loosely checking
console.log (5 === "5"); //false - strictly checking


console.log(5 === 5); //true
console.log(5 === "5"); //false

console.log(5 == 5); //true
console.log(5 == "5"); //true

console.log(0 ==""); //true - loosely checking
console.log(0 === "") ; //false - strictly checking

console.log(true ==1); //true - loosely checking
console.log(false ==0); //true - loosely checking
console.log(true === "1");
console.log(true ==2);
