// confusing comparsion in JavaScript

// == loose equality does type conversion
// === strict equality does not do type conversion

console.log("5" == 5); // true - string "5" is converted to number 5
console.log("5" === 5); // false - string and number are different types

console.log(0 == false); // true - false is converted to 0
console.log(0 === false); // false - number and boolean are different types

console.log(1 == true); // true - true is converted to 1
console.log(1 === true); // false - number and boolean are different types

console.log("" == 0); // true - empty string is converted to 0
console.log("" === 0); // false - string and number are different types

console.log("0" == 0); // true - string "0" is converted to number 0
console.log("0" === 0); // false - string and number are different types

// transitivity broken example
console.log("0" == 0); // true
console.log(0 == ""); // true
console.log("0" == ""); // false - both are strings, so no number conversion

// null and undefined confusion
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0); // false
console.log(null >= 0); // true - relational comparison converts null to 0
console.log(null > 0); // false

console.log(undefined == 0); // false
console.log(undefined >= 0); // false - undefined becomes NaN
console.log(undefined > 0); // false

// NaN confusion
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true - correct way to check NaN

// array comparison confusion
console.log([] == 0); // true - [] becomes "" then 0
console.log([] == ""); // true - [] becomes ""
console.log([] === ""); // false - array and string are different types

console.log([1] == 1); // true - [1] becomes "1" then 1
console.log([1] == "1"); // true - [1] becomes "1"
console.log([1] === 1); // false - array and number are different types

console.log([1, 2] == "1,2"); // true - [1, 2] becomes "1,2"

// object and array reference comparison
console.log([] == []); // false - both arrays have different memory references
console.log([] === []); // false - both arrays have different memory references

console.log({} == {}); // false - both objects have different memory references
console.log({} === {}); // false - both objects have different memory references

let a = [];
let b = a;
console.log(a == b); // true - both variables point to same array
console.log(a === b); // true - both variables point to same array

// string comparison is dictionary/lexicographic comparison
console.log("2" > "10"); // true - compares character by character
console.log(2 > "10"); // false - "10" is converted to number 10

console.log("apple" > "banana"); // false
console.log("banana" > "apple"); // true

// boolean with string confusion
console.log(true == "1"); // true - true becomes 1 and "1" becomes 1
console.log(false == "0"); // true - false becomes 0 and "0" becomes 0
console.log(false == "false"); // false - "false" becomes NaN

// safest habit
console.log(5 === Number("5")); // true - convert manually, then compare strictly


//NaN == not a number