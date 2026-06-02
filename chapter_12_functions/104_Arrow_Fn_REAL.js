function validateStatusCode(status){
    if(status >= 200 && status < 300){
            console.log("Status code is valid.");
}
}

//this is a function as an expression
const   validateStatusCode2 = function (status) {
    if(status >= 200 && status < 300){
        console.log("Status code is valid.");
    }
}

//arrow function 
const validateStatusCode3 = (status) => {
    if(status >= 200 && status < 300){
        console.log("Status code is valid.");
    }}