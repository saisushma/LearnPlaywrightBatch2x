let testmatrix = [
    ["login","pass",200],
    ["checkout","fail",404],
    ["Search","pass",180]
]

//how many testcases have we executed?
//how many testcases are passed?
//what is the status code that you have got for the fail?


for (let i= 0; i < testmatrix.length; i++) {
    for (let j = 0; j < testmatrix[i].length; j++) {
        console.log(testmatrix[i][j]);
        
    }
    
}


for(let row of testmatrix)
{
    for(let cell of row){
        process.stdout.write(cell +" ") //same as console.log but doesnt print in new line

    }
    console.log();
    
}

//for each
testmatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log("");
});