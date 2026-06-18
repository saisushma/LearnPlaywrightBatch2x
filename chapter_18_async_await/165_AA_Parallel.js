//when step2 depends on step1 result. You must run them sequentially

//step-1 step2


function apiCall(name){
    return new Promise(function (resolve){
        setTimeout(function(){
            resolve(name,"200 ok")
        },1000);
    })
}

async function seq(){

    let [r1,r2,r3] = await Promise.all([
       apiCall("Auth service"),
        apiCall("User Account creation"),
        apiCall("support page API")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
    
    
}

    seq();