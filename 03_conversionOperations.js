// 1. Conversion into Number
//let score = 35
//let score = "35"
//let score = "35abc"
//let score = null
//let score = undefined
let score = false
 
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);     

/*          Conclusion:
// After converting into the Number the above variables turns in type:
//    input                         type        value

// let score = 35       --->>> number      35
// let score = "35"     --->>> number      35
// let score = "35abc"  --->>> number      NaN
// let score = null     --->>> object      0
// let score = undefined--->>> undefined   NaN
// let score = false    --->>> number      0 and for true->1
*/

//2. Conversion into Boolean
let isLoggedIn = "asd"
let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolIsLoggedIn);

//          Conclusion:
/*
let isLoggedIn = 0      --->>false
let isLoggedIn = 1      --->>>true
let isLoggedIn = ""     --->>>false
let isLoggedIn = "asd"  --->>>true
*/

// 3. Conversion into String
let num = 45
let strNum = String(num)
//console.log("Converted type: "+typeof strNum);
//console.log("Value: "+strNum);
//      Conclusion:
/*

*/


// ******************** Operations: *******************

let value = 5
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " world!"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)        // 12
// console.log(1 + "2");       // 12
// console.log("1" + 2 + 2);   // 122
// console.log(1 + "2" + 2);   // 122
// console.log(1 + 2 + "2");   // 32

// console.log(Number(true))       // 1
// console.log(+true)              // 1
//console.log(true+);           // error

// console.log(+"");               // 0
//console.log(""+)              // error

let num1, num2, num3
num1 = num2 = num3 = 2 + 3 //This should not be preffered
// console.log(num1);

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter);





