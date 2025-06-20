const accoundId = 12345;
let name = "Shubham";
var contact = 58;
let accountState; //empty variable state defined.

// accoundId = 678910; (cannot change the accountId because it's set on "const variable")

//Modifying other variables below
name = "Hitesh";
contact = 98;

console.log(contact);

//declearing output in table format
console.table([accoundId, name, contact, accountState]); //"accountState" variable is undefined so its output will be undefined"
