/*
let is  the modern way for changing values
let is block-scoped , can be re-assigned but cannot be re-declared in the same scope

use let when you want to change geninuely 
*/

let a = 10;
let retryCount=0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;

console.log(retryCount);

/*
let retryCount=50;
console.log(retryCount);
SyntaxError: Identifier 'retryCount' has already been declared

*/

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined
