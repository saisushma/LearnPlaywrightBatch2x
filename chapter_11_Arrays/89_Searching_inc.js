let results = ["pass","fail","error","pass","fail"];

results.indexOf("fail");
results.indexOf("skip");

results.lastIndexOf("fail");


results.includes("error");
results.includes("skip");

//find - returns first matching element

let num = [10,20,30,45];
num.find(x => x > 20);

num.findIndex(n => n >20);
num.findLastIndex(n => n >20);