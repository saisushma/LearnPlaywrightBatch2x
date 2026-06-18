# Learn Playwright - Batch 2

This repository contains learning materials and code samples for **JavaScript fundamentals** as part of the Playwright automation testing course (Batch 2).

## Repository Structure

```text
LearnPlaywrightBatch2x/
|-- chapter_01_basics/               # JavaScript basics
|-- chapter_02_Javascript_concepts/  # Core JavaScript concepts
|-- chapter_03_Identifier_lieterals/ # Identifiers, literals, comments, and VS Code shortcuts
|-- chapter_04_JS_Concepts/          # Variables, scope, hoisting, and TDZ
|-- chapter_05_literals/             # Literals and data types
|-- chapter_06_operators/            # JavaScript operators
|-- chapter_07_if_else/              # Conditionals and practice tasks
|-- chapter_08_Switch_statement/     # Switch statements
|-- chapter_09_UserInput/            # User input with Node.js
|-- chapter_10_loops/                # Loops, loop IQ questions, and pattern/FizzBuzz tasks
|-- chapter_11_Arrays/               # Array basics and array methods
|-- chapter_12_functions/            # Function declarations, expressions, parameters, and spread/rest
|-- chapter_13_Strings/              # String properties, methods, searching, substrings, and tasks
|-- chapter_15_2D_Arrays/            # 2D arrays, nested iteration, examples, tasks, and CSV data
|-- chapter_16_Callback/             # Callback functions, synchronous/asynchronous callbacks, and callback hell
|-- chapter_17_Promises/             # Promises, API examples, finally, callback pyramid fixes, and Promise.all
|-- chapter_18_async_await/          # Async/await basics, sequencing, parallel execution, and examples
|-- chapter_19_Playwright_basics/    # Playwright project setup, config, tests, and CI workflow
`-- coding_test/                     # Coding practice files
```

## Chapters Overview

### Chapter 1: Basics
- Introduction to JavaScript
- Variables and data types
- Basic commands and console operations
- Quick code snippets and tips

### Chapter 2: JavaScript Concepts
- Core programming concepts
- Functions, loops, and conditionals
- JavaScript fundamentals recap

### Chapter 3: Identifiers & Literals
- Identifier naming rules and restrictions
- Naming conventions like `camelCase`, `PascalCase`, and `snake_case`
- Commenting best practices with `//` and `/* */`
- VS Code keyboard shortcuts reference for Windows

### Chapter 4: Variables, Scope & Hoisting
- `var`, `let`, and `const` differences
- Function scope vs block scope
- Hoisting behavior
- Temporal Dead Zone (TDZ)

### Chapter 5: Literals & Data Types
- Introduction to literals
- `null` vs `undefined`
- Number, string, and boolean literals
- Template literals and string interpolation

### Chapter 6: Operators
- Arithmetic, modulus, and exponentiation operators
- Comparison operators and strict vs loose equality
- Logical, ternary, type, increment, decrement, and nullish coalescing operators
- Confusing comparison scenarios and IQ questions

### Chapter 7: Conditionals & Practice
- Conditional statements
- IQ questions and exercises
- Leap year logic
- If-else practice tasks

### Chapter 8: Switch Statements
- `switch` syntax and usage
- `break` and `default` cases
- Fall-through behavior
- Practical switch examples

### Chapter 9: User Input
- Accepting user input in JavaScript
- Node.js `readline` module
- Interactive command-line programs

### Chapter 10: Loops
- `for`, `while`, and `do...while` loops
- `for...of`, `for...in`, and `forEach`
- Loop IQ questions and tricky scenarios
- Pattern printing and FizzBuzz practice tasks

### Chapter 11: Arrays
- Array creation and basics
- Adding and removing elements
- Searching and iterating arrays
- Real-world array examples
- Transforming arrays with `map`, `filter`, and `reduce`

### Chapter 12: Functions
- Function declarations vs expressions vs arrow functions
- Default parameters
- Rest parameters
- Spread syntax
- Hoisting behavior differences
- `this` binding in different function types

### Chapter 13: Strings
- String creation and properties
- Searching and checking string content
- Substring extraction
- String transformation methods
- String practice tasks and method cheatsheet

### Chapter 15: 2D Arrays
- Creating and accessing 2D arrays
- Nested loops for rows and columns
- Real-world 2D array examples
- Functions for working with 2D arrays
- Pattern-based IQ questions
- CSV test data examples

### Chapter 16: Callback Functions
- Passing functions as arguments
- JavaScript and Playwright-style callback examples
- Synchronous and asynchronous callbacks
- Callback hell and nested callback flow

### Chapter 17: Promises
- Creating and consuming promises
- Promise-based API examples
- `finally` usage
- Solving callback pyramid problems with promises
- Running multiple promises with `Promise.all`

### Chapter 18: Async/Await
- Async function basics
- Awaiting promise results
- Cleaner asynchronous code flow
- Sequential vs parallel async execution
- Async/await interview questions and login-flow examples

### Chapter 19: Playwright Basics
- Initial Playwright project setup
- `package.json` and dependency lock file
- Playwright dependency installation reference
- Playwright Test configuration with Chromium, Firefox, and WebKit projects
- Sample UI test under `tests/`
- GitHub Actions workflow for running Playwright checks in CI

## Function Types Comparison

| Aspect | Normal Function (Declaration) | Function Expression | Arrow Function |
|--------|------------------------------|---------------------|----------------|
| **Syntax** | `function name(params) { ... }` | `const name = function(params) { ... }` | `const name = (params) => { ... }` |
| **Hoisting** | Hoisted - can be called before declaration | Not hoisted - cannot be called before assignment | Not hoisted - cannot be called before assignment |
| **`this` Binding** | Has its own `this` | Has its own `this` | Inherits `this` from parent scope |
| **Constructor Usage** | Can be used with `new` | Can be used with `new` | Cannot be used with `new` |
| **`arguments` Object** | Has `arguments` object | Has `arguments` object | No `arguments` object |
| **Implicit Return** | Must use `return` keyword | Must use `return` keyword | Single expression can return without `return` |
| **Best For** | Reusable functions and methods | Callbacks and conditional functions | Short callbacks, array methods, and preserving parent `this` |

## VS Code Keyboard Shortcuts

A comprehensive list of default VS Code keyboard shortcuts for Windows is available in:

- [`chapter_03_Identifier_lieterals/VS_code_keyboard_shortcut_windows.md`](chapter_03_Identifier_lieterals/VS_code_keyboard_shortcut_windows.md)

## How to Use

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open the project in VS Code and explore chapter-wise code samples.

3. Run `.js` files using Node.js:

   ```bash
   node chapter_01_basics/01_Basics.js
   ```

4. Run Playwright tests:

   ```bash
   cd chapter_19_Playwright_basics
   npm install
   npx playwright test
   ```

5. View the Playwright HTML report after a test run:

   ```bash
   npx playwright show-report
   ```

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/) recommended

## Author

Learning materials for Playwright Batch 2.

---

> **Note:** This is an educational repository for learning JavaScript and Playwright automation testing.
