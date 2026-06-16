let checkAuth = Promise.resolve("Auth ok");
let checkDB= Promise.resolve("DB ok");
let checkCache = Promise.resolve("Cachee ok ");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results){
    console.log("All the checks are fine");
    
})

Promise.all([
    Promise.resolve("Ok"),
    Promise.reject("Db down"),
    Promise.resolve("ok")
]).then(function (r){
    console.log(r);    
}).catch(function(error){
    console.log("failed:", err);
    
})