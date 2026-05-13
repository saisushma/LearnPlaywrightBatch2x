console.log(score);
let score=100;

{
    //---TDZ for score starts here ---
    //console.log(score); //referemce error
    //score =50 ;
    //
    //TDZ happens only for variables declared with let and const, not for var
let score=100;
console.log(score);




}