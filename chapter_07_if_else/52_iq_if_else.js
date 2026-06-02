if("hello") console.log("STring is truthy");
if(42) console.log("number is truthy");
if({}) console.log("Empty object is truthy");
if([]) console.log("empty array is truthy");


if("") console.log("wont print");
if(null) console.log("wont print");
if(undefined) console.log("wont print");
if(NaN) console.log("wont print");
if(0) console.log("wont print");

//any number = 1,2,3,45,6 - TRUTH
//0 - false

let  name = undefined;
if(name){
    console.log("Hi");
}else {
    console.log("Bye");
}