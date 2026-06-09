JavaScript String Methods Cheatsheet
====================================

// String Creation
let str = "Hello World";
let str2 = new String("Hello"); // object wrapper (avoid)
let str3 = `Hello`; // template literal

// Basic Properties
str.length;                  // 11 - returns number of characters

// Accessing Characters
str.charAt(0);               // "H" - character at index 0
str[0];                      // "H" - bracket notation (preferred)
str.charCodeAt(0);           // 72 - Unicode of character at index 0
str.at(-1);                  // "d" - character at last index (ES2022)

// Searching & Checking
str.indexOf("World");        // 6 - first index of substring, -1 if not found
str.lastIndexOf("l");        // 9 - last index of substring
str.search(/world/i);        // 6 - regex search, returns index or -1
str.includes("Hello");       // true - checks if substring exists
str.startsWith("Hello");     // true - checks beginning of string
str.endsWith("World");       // true - checks end of string
str.match(/[A-Z]/g);         // ["H","W"] - returns array of regex matches
str.matchAll(/l/g);          // iterator of all regex matches

// Extracting Substrings
str.slice(0, 5);             // "Hello" - extracts from start to end (end exclusive)
str.slice(-5);               // "World" - negative counts from end
str.substring(0, 5);         // "Hello" - similar to slice, no negative indices
str.substr(6, 5);            // "World" - from index 6, length 5 (deprecated)

// Modifying Strings
str.toUpperCase();           // "HELLO WORLD"
str.toLowerCase();           // "hello world"
str.trim();                  // removes whitespace from both ends
str.trimStart();             // removes whitespace from start
str.trimEnd();               // removes whitespace from end
str.padStart(15, "*");       // "****Hello World" - pad to length 15
str.padEnd(15, "*");         // "Hello World****" - pad to length 15
str.replace("World", "JS");  // "Hello JS" - replaces first match
str.replaceAll("l", "x");    // "Hexxo Worxd" - replaces all matches
str.repeat(2);               // "Hello WorldHello World" - repeats string

// Splitting & Joining
str.split(" ");              // ["Hello", "World"] - splits by delimiter
str.split("");               // ["H","e","l","l","o"," ","W","o","r","l","d"]
str.concat("!");             // "Hello World!" - joins strings
["H","i"].join("-");        // "H-i" - array method, but commonly used with split

// Comparison
str.localeCompare("Hello");  // 0 (equal), -1 (before), 1 (after) - for sorting

// Useful Utilities
String.fromCharCode(72, 105); // "Hi" - create string from Unicode values
str.valueOf();               // "Hello World" - primitive value from String object
str.toString();              // "Hello World" - string representation

// Template Literals (bonus)
let name = "JS";
`Hello ${name}`;             // "Hello JS" - interpolation
`Sum: ${1 + 2}`;             // "Sum: 3" - expressions inside
`Line1\nLine2`;              // multi-line strings

// Quick Reference: indexOf vs search
let text = "The quick brown fox";
text.indexOf("fox");         // 16 - simple string search, optional start index
text.search(/[a-z]{5}/);     // 4 - regex pattern search, no start index option

// Chaining Example
str.toLowerCase().trim().replace("hello", "hi").split(" ");
