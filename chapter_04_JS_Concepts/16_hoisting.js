//JS engine

//line by line, JIT compilation

console.log(gretting);

var gretting = "Hello World";
console.log(gretting);

//behind the scene:
//var greeting -> hoisted with undefined
//console.log(greeting) -> undefined
//greeting = "Hello World" -> assignment stays in place
//console.log(greeting) -> Hello World


//var a;
console.log(a);
var a = "Hello Pramod";
console.log(a);
