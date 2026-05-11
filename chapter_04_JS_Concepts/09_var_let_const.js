var v = 10;
let l = 30;
const c = 3.14

var browser ="firefox";
var browser = "chrome"; // Re-declaration allowed with var
browser ="edge"; // Re-assignment allowed with var


var testcases =["login","logout","signup"];

for (var i=0;i<testcases.length;i++)
{
    console.log(testcases[i]);
}


/*`var` ->  the old way
`var` was the original keyword in JavaScript. It is **function-scoped**, can be **redeclared**, can be **reassigned**, and gets **hoisted** to the top of its scope with an initial value of `undefined`.

P.S : 

In modern automation code, we avoid `var` because it leaks out of `if` and `for` blocks, which causes confusing bugs in test loops.

*/