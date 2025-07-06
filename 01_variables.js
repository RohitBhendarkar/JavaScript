const accountId = 144553
let accountEmail = "acc@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"

// accountId = 2    //not allowed
accountEmail = "acc1@gmail.com"
accountPassword = "212231"
accountCity = "Pune"
let accountState;

/* 
Prefer not to use var
because of issue in block scope and functional scope.
*/


console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

