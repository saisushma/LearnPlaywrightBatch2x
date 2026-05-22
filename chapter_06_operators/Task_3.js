

let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
console.log(a);


// 6  + 6 - 6 + 6 + 7 = 19

/*
Operator	Type	Value Used	a After
a++	Post-increment	5	6
++a	Pre-increment	7	7
--a	Pre-decrement	6	6
a--	Post-decrement	6	5
++a	Pre-increment	6	6
*/