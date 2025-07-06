// 07_Strings.js
// Comprehensive Guide to Strings in JavaScript

// 1. Creating Strings
let str1 = "Hello, World!";        // Double quotes
let str2 = 'JavaScript Strings';   // Single quotes
let str3 = `Template Literals`;    // Backticks (ES6+)
const str4 = new String("Using String Constructor"); // String constructor


// 2. String Length
console.log(str1.length); // 13

// 3. Accessing Characters
console.log(str1[0]);         // 'H'
console.log(str1.charAt(1));  // 'e'

// 4. Immutability
// Strings are immutable: cannot change characters directly
// str1[0] = 'h'; // Does NOT work

// 5. Concatenation
let greet = "Hello, " + "World!";
let greet2 = str1.concat(" How are you?");
let greet3 = `${str1} How are you?`; // Template literal

// 6. Escape Characters
let quote = 'He said, "It\'s fine."';
let multiline = "Line1\nLine2\tTabbed";

// 7. Useful String Methods
let sample = "  JavaScript String Methods  ";

// Case conversion
console.log(sample.toUpperCase()); // "  JAVASCRIPT STRING METHODS  "
console.log(sample.toLowerCase()); // "  javascript string methods  "

// Trimming whitespace
console.log(sample.trim());        // "JavaScript String Methods"
console.log(sample.trimStart());   // "JavaScript String Methods  "
console.log(sample.trimEnd());     // "  JavaScript String Methods"

// Searching
console.log(sample.indexOf("Script")); // 4
console.log(sample.lastIndexOf("t"));  // 22
console.log(sample.includes("String")); // true
console.log(sample.startsWith("  Java")); // true
console.log(sample.endsWith("Methods  ")); // true

// Extracting substrings
console.log(sample.slice(2, 12));   // "JavaScript"
console.log(sample.substring(2, 12)); // "JavaScript"
console.log(sample.substr(2, 10));  // "JavaScript" (deprecated)

// Splitting and joining
let words = sample.trim().split(" "); // ["JavaScript", "String", "Methods"]
console.log(words.join("-"));         // "JavaScript-String-Methods"

// Replacing
let replaced = sample.replace("String", "Text");
let replacedAll = sample.replaceAll(" ", "_"); // ES2021+

// Repeating
console.log("ha".repeat(3)); // "hahaha"

// Padding
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"

// 8. Template Literals (ES6+)
let name = "Alice";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;

// 9. Unicode and Special Characters
let smile = "\u263A"; // ☺
let euro = "\u20AC";  // €

// 10. String Comparison
console.log("apple" === "apple"); // true
console.log("a" < "b");           // true (lexicographical order)

// 11. Converting Other Types to String
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

// 12. Raw Strings
let raw = String.raw`C:\Development\profile\about.txt`; // No escape processing

// 13. Iterating Over Strings
for (let char of "abc") {
    console.log(char); // 'a', 'b', 'c'
}

// 14. Multiline Strings (Template Literals)
let multi = `Line 1
Line 2
Line 3`;

// 15. String Objects vs. Primitives
let prim = "hello";
let obj = new String("hello");
console.log(typeof prim); // "string"
console.log(typeof obj);  // "object"

// 16. Common Pitfalls
console.log("5" + 1); // "51" (string concatenation)
console.log("5" - 1); // 4   (string converted to number)

// Summary: Strings in JavaScript are immutable sequences of UTF-16 code units with many built-in methods for manipulation and inspection.






const string = "All is well.";
// console.log(Str.__proto__); // Outputs the prototype of the string object
// console.log(Str.__proto__ === String.prototype); // true, confirms that Str is a string


// console.log(Str.length);
// console.log(Str.toUpperCase());
// console.log(Str.charAt(8));
// console.log(Str.indexOf('w'));

const newString = string.substring(0, 5)
// console.log(newString);

const anotherString = string.slice(-8, 8)
// console.log(anotherString);

const newString1 = "       FullStack      "
// console.log(newString1.trim());


const url = "https://google.com/javascript/reference/mdn"

// console.log(url.replece('/','-'))
// console.log(url.replaceAll('/', '%20'))

// console.log(url.includes('mdn'));

const string2 = "Mitochondria is powerhouse of the cell."
console.log(string2.split(' '));








