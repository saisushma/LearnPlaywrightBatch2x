function makeRetryTracker(max){
    let attempts = 0;
    function tryAgain(testName){
        attempts++;
        if  (attempts > max){
            return `Max retries exceeded for ${testName}`;
    } return `Attempt ${attempts} for ${testName}`;
}
return tryAgain;

}

let retry = makeRetryTracker(3);
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));
console.log(retry("Login Test"));

