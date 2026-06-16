//real scenario : end to end login to app.vwo.com


//openBrowser()
//goToLoginPage()
//enterCredentials()
//clickLogin()


function openBrowser(callback){
    console.log("opening the brwoser");
    setTimeout(function(){
        console.log("step1 : Opened the browser");
        callback();
    },1000);
    
}
function goToLoginPage(callback){
    setTimeout(function(){
        console.log("step2 : login page loaded");
        callback();
    },2000);
}