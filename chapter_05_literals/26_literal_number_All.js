// Number literals in JavaScript

// 1. Integer number
let positiveNumber = 42;
let negativeNumber = -100;
let zero = 0;

console.log(positiveNumber);
console.log(negativeNumber);
console.log(zero);

// 2. Decimal / floating-point number
let price = 99.99;
let temperature = -12.5;

console.log(price);
console.log(temperature);

// 3. Scientific notation
let largeValue = 1.5e6; // 1500000
let smallValue = 2.5e-3; // 0.0025

console.log(largeValue);
console.log(smallValue);

// 4. Binary number literal
let binaryValue = 0b1010; // 10
console.log(binaryValue);

// 5. Octal number literal
let octalValue = 0o77; // 63
console.log(octalValue);

// 6. Hexadecimal number literal
let hexValue = 0xff; // 255
console.log(hexValue);

// 7. Special numeric values
let infinityValue = Infinity;
let negativeInfinityValue = -Infinity;
let notANumberValue = NaN;

console.log(infinityValue);
console.log(negativeInfinityValue);
console.log(notANumberValue);

// 8. Numeric separators for readability
let population = 1_400_000_000;
let accountBalance = 10_50_000;

console.log(population);
console.log(accountBalance);

// 9. BigInt for very large whole numbers
let hugeNumber = 9007199254740993n;
console.log(hugeNumber);
console.log(typeof hugeNumber); // "bigint"

// 10. typeof checks
console.log(typeof positiveNumber); // "number"
console.log(typeof price); // "number"
console.log(typeof infinityValue); // "number"
console.log(typeof notANumberValue); // "number"

// Quick summary:
// number -> integers, decimals, binary, octal, hex, Infinity, -Infinity, NaN
// bigint -> very large whole numbers written with n at the end
