//n = 3a
//x
//x x 
// x x x 
let n = 3;

for (let i = 1; i <= n; i++) {
    let row = " ";
  for(let j=1;j<=i;j++)
  {
    row += "x";
    
  }
    console.log(row.trim());
}