
/*  Triangle Classifier:

Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

*/

let a = 60;
let b = 60;
let c = 60;

if(a==b && b==c && c==a){
    console.log("Equilateral triangle");
}
else if(a==b || b==c || c==a){
    console.log("Isosceles triangle");
}
else{
    console.log("Scalene triangle");
}