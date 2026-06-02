let g_x = 10; //global variable

//nested scope | blocked scope
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x); //can access outer variable
    }
    inner();
    console.log(y); //error, y is not defined in outer scope
}