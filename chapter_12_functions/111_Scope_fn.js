//scope in functions

let env = "staging"; //global scope

function setupConfig(){
    let timeout = 3000; //local scope
    console.log(env); //can access global variable
    console.log(timeout); //can access local variable

}

setupConfig();
console.log(env);
console.log(timeout); //error, timeout is not defined in global scope