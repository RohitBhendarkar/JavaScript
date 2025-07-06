const score1 = 400
// console.log(score1);

const score2 = new Number(350)
// console.log(score2);

// console.log(score2.toString().length);
// console.log(score1.toFixed(2));


const number = 623.7563
// console.log(number.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.isInteger(5));


// ************************* Maths: ************************* //

// console.log(Math);
// console.log(Math.abs(-45));     //-->> 45
// console.log(Math.round(4.5));   //-->> 5 (It rounds of the value to nearest integer.)
// console.log(Math.ceil(67.8));   //-->>68(Returns rounded off value to ceiling.)
// console.log(Math.floor(67.8));  //-->>67
// console.log(Math.min(56,78,90));//-->>56(returns the minimum value among arguments)
// console.log(Math.max(78,90));   //-->>90(returns the maximum value among arguments)
// console.log(Math.SQRT1_2);      //0.7071067811865476 The square root of 0.5, or, equivalently, one divided by the square root of 2.
// console.log(Math.sqrt(25));     // 5 Returns the square root of a number
// console.log(Math.SQRT2);        // The square root of 2.

console.log(Math.random());        //Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10)+1); //Returns a pseudorandom number between 0 and 10.

console.log(Math.floor(Math.random()*10)+1);//Returns a pseudorandom number between 1 and 10.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min)) + min);
// Returns the value between the range of minimum and maximum
