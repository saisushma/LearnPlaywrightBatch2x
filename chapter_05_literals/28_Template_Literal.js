let fname = "Prrammmod";
let fullname = `Hi ${fname}Dutta`;
console.log(fullname);

let env = "staging";
env = "prod";
const userID = 12345;
const apiurl = `https://${env}.vwo.com/api/v2/users/${userID}`;
console.log(apiurl);

//playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`table tr:nth-child(${rowIndex}) td[data-column="${columnName}"]`).click();  

//logs
const testName = "Login Test";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testName}_${timestamp}.png` });