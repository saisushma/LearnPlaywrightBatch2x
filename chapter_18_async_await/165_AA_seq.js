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
    console.log("Starting of the test");
    let start = Date.now();

    let r1 = await apiCall("Login");
    console.log(r1);

    let r2 = await apiCall("DashBoard");
    console.log(r2);

    let r3 = await apiCall("Report");
    console.log(r3);

    console.log("Time: ~" + (Date.now()- start)+ "ms");
    
    
}

    seq();