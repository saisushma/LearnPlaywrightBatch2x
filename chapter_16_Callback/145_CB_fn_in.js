function cafe(item, callWhenTableIsReady){
    console.log("Hi, finding a table.. 1");
    console.log("Hi, finding a table.. 2");
    console.log("Hi, finding a table.. 2");
    console.log();
    
    callWhenTableIsReady();
    
}

function callWhenTableIsReady(){
    console.log("calling 987654123");
    
}

cafe("Burger",callWhenTableIsReady);

cafe("Pizza", function(){
    console.log("calling 12345678");
    
} )

cafe ("Momos", ()=> )