let scores= [
    [85,90,78],
    [60,45,70],
    [95,88,92]
];
//map will take input one by  one.


let rowSums = scores.map(row => row.reduce((a,b)=> a+b, 0)); //reduce accumilates all to a single value
console.log(rowSums);

let suiteResults =[
    ["login-pass","register-pass","logout-pass"], //auth suite
    ["search-pass","filter-fail","sort-pass"], //search suite   
    ["Checkout-fail","payment-fail","confirm-pass"] //payment suite
]

//i want all the testcases which have failed


for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults.length; j++) {
       if(suiteResults[i][j].includes("fail")){
        console.log(suiteResults[i][j] );
        
       }
        
    }
    
}


let array_2d = [
    [1,2,3],
    [4,5],
    [6]
] //assmyteric array.