//let is block scoped

let x = "global";
if(true){
    //TDZ for block scoped "x" starts here
    //console.log(x); //reference error
    ;

    let x = "block";
    console.log(x); //block
}