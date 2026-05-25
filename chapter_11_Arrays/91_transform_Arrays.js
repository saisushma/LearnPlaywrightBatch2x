let scores = [45,82,91,60,73];

//map transfers every element , returns a new arrays
//returns same num of values but based on condition, their values will be changed.



let grades = scores.map( s=> s > 70 ? "pass":"fail");
console.log(grades);

//filter - keeps elements that pass a test

let passing = scores.filter(s => s > 70);
console.log(passing);


//reduce - accumulates to a single value
let total = scores.reduce((a,b)=> a+b,0);
console.log(total)

//flat - flattens nested arrays

let nested = [[1,2],[3,4],[5]]
console.log(nested.flat());
