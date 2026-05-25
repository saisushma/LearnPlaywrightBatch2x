//Iterate - go from one to another

let tests = ["login", "checkout","search"];

for(let i = 0; i < tests.length; i++)
{
    console.log(i);
}

console.log("==================");


//for.. of (Cleanest for values)

for (const test of tests) {
    console.log(test);
}

console.log("==================");

tests.forEach((i, index) => {
    console.log(i, index);
});


let students = ["sai","sush","happy"];


