let value = "5";
switch (value){
    case 5:
        console.log("The value is 5");
        break;  
    case "5":
        console.log("The value is a string 5");
        break;
}

let status = 0;
console.log(typeof status);
switch  (status){
    case false : 
        console.log("Status is false");
        break;
    case 0:
        console.log("Status is 0");
        break; 
}