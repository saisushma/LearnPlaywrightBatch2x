let arr = [1,2,3];
//Adding an element to the end of the array
arr.push(4);
console.log(arr); //[1,2,3,4]
//removing an element from the end of the array
arr.pop();
console.log(arr); //[1,2,3]
//at the end of the array we can add multiple elements
arr.push(5,6);
console.log(arr); //[1,2,3,5,6]
//add to the beggining of the array
arr.unshift(0);
console.log (arr); //[0,1,2,3,5,6]

//remove from the beggining of the array

arr.shift();
console.log(arr); //[1,2,3,5,6]

//multiple elements can be added to the end of the array
arr.push(4,5,6);
console.log(arr); //[1,2,3,5,6,4,5,6]
arr.unshift(100);
console.log(arr); //[100,1,2,3,5,6,4,5,6]