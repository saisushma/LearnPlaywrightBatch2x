//let str="madam";
let str= "daddy";
let str1="";
let len = str.length;


for(let i = len-1 ; i>=0 ;i--)
{
    str1=str1+str[i];
}

console.log(str1);


if(str1===str)
{
  console.log("its a palindrome");
  
}
else{
    console.log("not a palindrome");
    
}