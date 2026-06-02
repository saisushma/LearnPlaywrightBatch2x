//pure function
//a pure function is a function that always returns
//  the same result for the same input and has no side effects (does not modify any external state).

function calculatePassRate(total,passed){
    return ((passed/total)*100).toFixed(2);
}
console.log(calculatePassRate(100, 85)); //85.00
console.log(calculatePassRate(100, 85)); //85.00

function isPassing(score){
    return score >=threshold;
}

let threshold = 60;
console.log(isPassing(threshold)); //true

let  threshold = 50;
console.log (isPassing(threshold)); //false