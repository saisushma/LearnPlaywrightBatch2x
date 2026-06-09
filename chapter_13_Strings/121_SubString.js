let str="Login_test_pass_001";
//slice(starts,ends) - negative indexes supported
console.log(str.slice(0,5)); //login
console.log(str.slice(11)); //pass_001

let testNum = str.slice(-3); //001
console.log(testNum);

str.includes("Pass"); //false
str.includes("pass"); //true

//similar to slice but substring does not 
// support negative indexes
str.substring(6,10);
str.at(0); //L