function openBrowser(){
    return new Promise(function (resolve){
        //code  to open the browser
        resolve("Open the browser");
    })
}

function goToLogin(){
    return new Promise(function (resolve){
        resolve("Login page loaded");
    });
}

function clickLogin(){
    return new Promise(function (resolve){
        resolve("Logged in successful");
    })
}
openBrowser().then(function (msg){
    console.log("Step-1 open browser");
    return goToLogin();
}).then(function(msg){
    console.log("Step 2:",msg);
    return enterCredentials();   
}).then(function (msg){
    console.log("Step 3",msg);
    return clickLogin();
}).then(function (msg){
    console.log("STep 4 :", msg);  
}).catch(function (error){
    console.log("Error:",error);
}).finally(function(){
    console.log("Done execution!");  
});