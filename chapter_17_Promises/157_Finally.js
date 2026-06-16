let testRun = new Promise(function(resolve, reject){
    let apiCall = false;
    if(apiCall){
    resolve({"status" : "done"});
    }else{
    reject("Assertion failed");}
});

testRun.then(function (data){
    console.log(data);    
}).catch(function (error){
    console.log(error);    
}).finally(function(){
    console.log("I will be executed anyhow");
        
})