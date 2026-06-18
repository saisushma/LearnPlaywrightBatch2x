async function testapi(){
    try{
        let result = await Promise.reject("503 reject"); 
        //await untill promise is finished
    }
    catch(error){
        console.log('Error',error);    
    }
    finally{
        console.log("Cleanup ..!!");
        
    }
}
testapi();