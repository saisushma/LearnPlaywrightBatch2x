//higher-Order functions
//A higher-order function is a function that takes another function as an argument, or returns a function as a result.

function runwithLoggin(testFn, testName){
    console.log(`starting : ${testName}`);
    let result = testFn();
    console.log(`finished : ${testName}`);
    return result;
}
function loginTest(){
    return "pass";
}
function loginTestFailed(){
    return "fail";
}

runwithLoggin(loginTest, "Login Test");
runwithLoggin(loginTestFailed, "Login Test Failed");