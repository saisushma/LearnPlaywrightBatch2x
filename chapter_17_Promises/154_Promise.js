let order = new Promise(function (resolve,reject){
    let foodready = true;
    if(foodready){
        resolve("Pizza is delivered. Food is ready.");
    }else{
        reject("order cancelled beacuse of rain");
    }
})
console.log(order);
