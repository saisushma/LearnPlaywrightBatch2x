let browser = "Edge";

switch(browser){
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera": 
        console.log("chroumim project");
        break;
    case "Firefox":
        console.log("Mozilla project");
        break;
    case "Safari":
        console.log("Apple browser - uses Javascriptcore enginer");
        break;
    default:
        Console.log("Unknown browser - manual testing needed");
}