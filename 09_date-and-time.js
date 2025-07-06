// Dates:

let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getTime());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate);
// console.log(myDate);

// let myCreatedDate = new Date(2004, 10, 11)
// let myCreatedDate = new Date(2004, 10, 11, 5, 6)
// let myCreatedDate = new Date("2004-11-11")
let myCreatedDate = new Date("11-11-2004")
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
// console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getHours());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}
    
));




// Time:


