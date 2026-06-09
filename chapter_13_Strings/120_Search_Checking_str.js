//searching and checking strings

let url = "https://www.google.com/search?q=javascript+string+methods&oq=javascript+string+methods&aqs=chrome..69i57j0i512l9.1221j0j7&sourceid=chrome&ie=UTF-8";
console.log(url.includes("google")); //true
console.log(url.includes("bing")); //false

///starts wiyj/ends with
url.startsWith ("https"); //true
url.startsWith("http:");//false
url.endsWith("ff");//false
url.endsWith("UTF-8"); //true
url.lastIndexOf("a"); //last index of a
url.indexOf("no there"); //-1
url.indexOf("x"); //-1


console.log(url.search(/login/)); //regex -1 not found
console.log(url.search(/google/)); //regex 8 found at index 8
//regex - regular expression - a pattern you can find within a string.
