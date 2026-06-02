//checking the array

//check if something is an array

let result = Array.isArray([1,2,3]);
console.log(result);
let result1=Array.isArray("a");
console.log(result1);

//every & some

[80,90,85].every(s=>s >=70); //true
[80,60,85].every(s =>s >= 70); //false

//playwright API
[200,201,203].every(statuscode => statuscode > 200);

//some - Atleast one must pass

[80,60,85].some(s=> s<70); //true
[80,90,40].some(s=> s<70); //false