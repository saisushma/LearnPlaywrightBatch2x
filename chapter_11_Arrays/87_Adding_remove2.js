let arr =[ 1,2,3];
arr.push(4,5,6);
console.log(arr);

arr.splice(2,1);  //delete from start-2 index and delete 1 number
console.log(arr);

arr.splice(2,0,99); //dont delete , but add the number
console.log(arr);

arr.splice(2,1,100); //delete and replace
console.log(arr); //[ 1, 2, 100, 4, 5, 6 ]

arr.splice(1,2,10,20);
console.log(arr);