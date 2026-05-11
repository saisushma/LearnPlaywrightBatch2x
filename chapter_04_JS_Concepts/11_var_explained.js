var a = 10; //global scope

//var is function scoped

console.log(a);

function printHello(){
    console.log("Hello");
    var a = 20; //local scope
    console.log(a)

    if(true){
        var a = 30;
        console.log(a);
    }
}

printHello();

//var == trump, changable/ no trust worthy, flipper