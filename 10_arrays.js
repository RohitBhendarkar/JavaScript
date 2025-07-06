// Arrays:
// 1. Arrays are re-sizable in javaScript.
// 2. Array can store values of mixed data types
// 3. Arrays are not associative means we can not access elements
// using arbitrary strings i.e. console.log(myArr["one"]);.
// 4. Zero based indexing.
// 5. Copy operations creates shallow copies

const myArr = [0, 2, 34, 5, 24, 2, 6]
const myHeros = ["Shaktiman", "Naagraj"]
const arr2 = new Array(1,2,3,4,5,67,89)
// console.log(arr2);

// Array Methods:

// myArr.push(56)          //
// myArr.pop();
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(24));
// console.log(myArr);
// console.log(myArr.indexOf(5));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);

// slice(), splice()

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);






     



