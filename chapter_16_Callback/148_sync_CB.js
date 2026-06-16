let testResult = ["Pass","Fail","Pass","Skip"];

testResult.forEach(function(result, index){
    console.log("test"+ index + " =>" +result);
    
})
//perfect example of a synchronous callback where it will take the index 1 by 1
//the result 1 by 1 and print 1 by 1.