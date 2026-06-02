function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} with maxRetries: ${maxRetries} and delay: ${delay}ms`);
}

retry("Login Test");
retry("Signup Test", 5);
retry("Payment Test", 2, 2000);

/*
Retrying Login Test with maxRetries: 3 and delay: 1000ms
Retrying Signup Test with maxRetries: 5 and delay: 1000ms
Retrying Payment Test with maxRetries: 2 and delay: 2000ms
