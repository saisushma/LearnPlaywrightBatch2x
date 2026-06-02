let fruit = "banana";
switch(fruit){
    case "apple":
        console.log('Apple selected');
        
    case "banana":
        console.log('Banana selected');
    
    case "Cherry":
        console.log('Cherry selected');
  
    case "date":
        console.log('Date selected');
    default:
        console.log("default reached")
       
}

/*o/p : as break is missing : 

Banana selected
Cherry selected
Date selected
default reached */