const accountId = 7711; //constant connot be changed
let accountEmail = "shubham@gmail.com"; //let variable can be changed later
var accountPassword = "12345"; //var variable can be changed later
accountCity = "Kathmandu";
let accountState;

// accountId = 5

// accountId = 5341; // could not be chaged because it was on const
accountEmail = "web.shubham@gmail.com"; //var accountEmail modified
accountPassword = "3511"; //var accountPassword modified
accountCity = "Lalitput"; //accountCity modified

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
