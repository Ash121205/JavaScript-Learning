const accountId = 144553
let accountEmail = "ashesh@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2; //not allowed
accountEmail = "as@as.co"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue of in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])