function getToken(){
    return Promise.resolve("abc123");
}

//playwright 
//page.goto() - Promise()
//await.goto();

async function run(){
    let token = await getToken();
    console.log(token);
    
}
run();