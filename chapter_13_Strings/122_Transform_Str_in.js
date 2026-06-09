let str = "hello world";
console.log(str.toUpperCase()); //HELLO WORLD
console.log(str.toLowerCase()); //hello world

let str1 = "   hello world   ";
console.log(str1.trim()); //hello world
console.log(str.trimStart());
console.log(str.trimEnd());

let msg = "Test: FAIL. Retry: FAIL. Retry: PASS";
console.log(msg.replace("FAIL", "PASS"));   //Test: PASS. Retry: FAIL. Retry: PASS
console.log(msg.replaceAll("FAIL","PASS"));
console.log(msg.replace(/FAIL/g, "PASS")); //regex

//concatenation
let str2 = "Hello";
let str3 = "World";
console.log(str2 + " " + str3); //Hello World
console.log(str2.concat(" ", str3)); //Hello World  
console.log(`${str2} ${str3}`); //Hello World


