let rajkumar_age = 18;
let rj_will_goa  = rajkumar_age >18 ? "RJ will go to GOa" : "No goa";

console.log (rj_will_goa);


let actualStatusCode = 200;
let expectedStatusCode = 200;
let result = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log (result);

let environment = "staging";
let baseUrl = environment ==="Prod"
    ? "https://www.google.com
    : "https://www.staging.google.com";
console.log (baseUrl);

let isCI = true;
let browserMode= isCI ? "headless" : "headed";
console.log ("Launching browser in", browserMode, "mode");

let responseTime = 350; //ms
let sla = 1000; //ms
let slastatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log('Response: ${responseTime}ms - ${slastatus}');


//Nested Ternary Operator

//multiple condition
let age = 26;
let is_sai_goa = age > 26 ? "Sai will go to Goa" : age === 26 ? "Sai is at the perfect age for Goa" : "Sai will not go to Goa";
console.log (is_sai_goa);

let age_sai = 45;
let is_sai_drink = age_sai > 45 ? (age_sai >26 ?"Drink" : "No drink") : "No Goa";
console.log (is_sai_drink);

//===========

let statusCode = 404;
let category = 
        statusCode < 300  ? "Success" :
        statusCode < 400 ? "Redirect" :
        statusCode < 500 ? "Client Error" : "Server Error";
    console.log('Status ${statusCode} : ${category}');


// ============

let temp = 35;
let feel  = (temp >= 40)? "Extremely hot" :
            (temp >=30) ?"Hot" :
            (temp >=20) ? "Warm" :
            (temp >=10) ? "Cool" : "Cold";
console.log ("The temperature is", temp , " | Feels : ", feel);
