const accountId = 12345
let accountEmail = "sandipwagle@gmail.com"  
var accountPasword = "Sandip123"
accountCity = "Kathmandu"
// accountId=23456 not allowed as const is constant.
// console.log(accountId);

accountEmail = "wagle123@gg.com"
accountPassword = "abcde"
accountCity = "pokhara"
console.table([accountId, accountEmail, accountPasword, accountCity])
/*
prefer not to use var because of 
functional scope and block scope
*/

