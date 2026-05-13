// null vs undefined in JavaScript

// undefined means:
// A variable exists, but no value has been assigned yet.
let studentName;
console.log(studentName); // undefined

// null means:
// We intentionally assign an empty value.
let selectedCourse = null;
console.log(selectedCourse); // null

// typeof behaves differently than many beginners expect.
console.log(typeof studentName); // "undefined"
console.log(typeof selectedCourse); // "object"

// Loose equality says they are similar empty values.
console.log(null == undefined); // true

// Strict equality checks both value and type.
console.log(null === undefined); // false

// Another common example:
let score;
console.log(score); // undefined

score = null;
console.log(score); // null

// Quick summary:
// undefined -> value not assigned by the programmer yet
// null -> empty value assigned intentionally by the programmer
